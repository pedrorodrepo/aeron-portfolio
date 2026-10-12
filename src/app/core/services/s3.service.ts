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
      title: 'Abstract Composition',
      description: 'A beautiful abstract piece',
      order: 1,
      isVisible: true,
      uploadDate: new Date('2024-01-15'),
      images: [
        {
          filename: 'artwork1.jpg',
          s3Key: 'artworks/artwork1.jpg',
          s3Url: 'https://via.placeholder.com/800x600/FF6B6B/FFFFFF?text=Artwork+1',
          fileSize: 2048000,
          dimensions: { width: 800, height: 600 }
        }
      ]
    },
    {
      id: '2',
      title: 'Landscape Dreams',
      description: 'Inspired by nature',
      order: 2,
      isVisible: true,
      uploadDate: new Date('2024-02-20'),
      images: [
        {
          filename: 'artwork2.jpg',
          s3Key: 'artworks/artwork2.jpg',
          s3Url: 'https://via.placeholder.com/800x600/4ECDC4/FFFFFF?text=Artwork+2',
          fileSize: 1856000,
          dimensions: { width: 800, height: 600 }
        }
      ]
    },
    {
      id: '3',
      title: 'Urban Reflections',
      description: 'City life captured - Multiple images',
      order: 3,
      isVisible: true,
      uploadDate: new Date('2024-03-10'),
      images: [
        {
          filename: 'artwork3a.jpg',
          s3Key: 'artworks/artwork3a.jpg',
          s3Url: 'https://via.placeholder.com/800x600/95E1D3/FFFFFF?text=Image+1',
          fileSize: 2304000,
          dimensions: { width: 800, height: 600 }
        },
        {
          filename: 'artwork3b.jpg',
          s3Key: 'artworks/artwork3b.jpg',
          s3Url: 'https://via.placeholder.com/800x600/F38181/FFFFFF?text=Image+2',
          fileSize: 2104000,
          dimensions: { width: 800, height: 600 }
        },
        {
          filename: 'artwork3c.jpg',
          s3Key: 'artworks/artwork3c.jpg',
          s3Url: 'https://via.placeholder.com/800x600/AA96DA/FFFFFF?text=Image+3',
          fileSize: 2204000,
          dimensions: { width: 800, height: 600 }
        }
      ]
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

  uploadImageGroup(files: File[], title?: string, description?: string): Observable<string> {
    return new Observable(observer => {
      const images = JSON.parse(localStorage.getItem('artworkImages') || '[]');
      const imageFiles: any[] = [];
      let processed = 0;

      files.forEach(file => {
        const reader = new FileReader();
        reader.onload = () => {
          imageFiles.push({
            filename: file.name,
            s3Key: `artworks/${file.name}`,
            s3Url: reader.result as string,
            fileSize: file.size,
            dimensions: { width: 800, height: 600 }
          });
          
          processed++;
          
          if (processed === files.length) {
            const newGroup: ArtworkImage = {
              id: Date.now().toString(),
              title: title || 'Untitled',
              description: description || '',
              order: images.length + 1,
              isVisible: true,
              uploadDate: new Date(),
              images: imageFiles
            };
            
            images.push(newGroup);
            localStorage.setItem('artworkImages', JSON.stringify(images));
            
            observer.next('success');
            observer.complete();
          }
        };
        reader.readAsDataURL(file);
      });
    });
  }

  deleteImage(id: string): Observable<boolean> {
    const images = JSON.parse(localStorage.getItem('artworkImages') || '[]');
    const filtered = images.filter((img: ArtworkImage) => img.id !== id);
    localStorage.setItem('artworkImages', JSON.stringify(filtered));
    return of(true);
  }

  getImageUrl(key: string): string {
    return `${environment.s3Config.baseUrl}/${key}`;
  }
}
