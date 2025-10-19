import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ArtworkImage } from '../../shared/models/artwork-image.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class S3Service {
  private mockImages: ArtworkImage[] = [
    {
      id: '1',
      filename: 'artwork1.jpg',
      s3Key: 'artworks/artwork1.jpg',
      s3Url: 'https://via.placeholder.com/800x600/FF6B6B/FFFFFF?text=Artwork+1',
      title: 'Abstract Composition',
      description: 'A beautiful abstract piece',
      order: 1,
      isVisible: true,
      uploadDate: new Date('2024-01-15'),
      fileSize: 2048000,
      dimensions: { width: 800, height: 600 }
    },
    {
      id: '2',
      filename: 'artwork2.jpg',
      s3Key: 'artworks/artwork2.jpg',
      s3Url: 'https://via.placeholder.com/800x600/4ECDC4/FFFFFF?text=Artwork+2',
      title: 'Landscape Dreams',
      description: 'Inspired by nature',
      order: 2,
      isVisible: true,
      uploadDate: new Date('2024-02-20'),
      fileSize: 1856000,
      dimensions: { width: 800, height: 600 }
    },
    {
      id: '3',
      filename: 'artwork3.jpg',
      s3Key: 'artworks/artwork3.jpg',
      s3Url: 'https://via.placeholder.com/800x600/95E1D3/FFFFFF?text=Artwork+3',
      title: 'Urban Reflections',
      description: 'City life captured',
      order: 3,
      isVisible: true,
      uploadDate: new Date('2024-03-10'),
      fileSize: 2304000,
      dimensions: { width: 800, height: 600 }
    }
  ];

  constructor() {}

  listImages(): Observable<ArtworkImage[]> {
    const storedImages = localStorage.getItem('artworkImages');
    if (storedImages) {
      return of(JSON.parse(storedImages));
    }
    localStorage.setItem('artworkImages', JSON.stringify(this.mockImages));
    return of(this.mockImages);
  }

  uploadImage(file: File, title?: string, description?: string): Observable<string> {
    return new Observable(observer => {
      const reader = new FileReader();
      reader.onload = () => {
        const images = JSON.parse(localStorage.getItem('artworkImages') || '[]');
        const newImage: ArtworkImage = {
          id: Date.now().toString(),
          filename: file.name,
          s3Key: `artworks/${file.name}`,
          s3Url: reader.result as string,
          title: title || file.name.split('.')[0],
          description: description || '',
          order: images.length + 1,
          isVisible: true,
          uploadDate: new Date(),
          fileSize: file.size,
          dimensions: { width: 800, height: 600 }
        };
        
        images.push(newImage);
        localStorage.setItem('artworkImages', JSON.stringify(images));
        
        observer.next(newImage.s3Url);
        observer.complete();
      };
      reader.readAsDataURL(file);
    });
  }

  deleteImage(key: string): Observable<boolean> {
    const images = JSON.parse(localStorage.getItem('artworkImages') || '[]');
    const filtered = images.filter((img: ArtworkImage) => img.s3Key !== key);
    localStorage.setItem('artworkImages', JSON.stringify(filtered));
    return of(true);
  }

  getImageUrl(key: string): string {
    return `${environment.s3Config.baseUrl}/${key}`;
  }
}
