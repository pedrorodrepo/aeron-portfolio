import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ArtworkImage } from '../../shared/models/artwork-image.model';

@Injectable({
  providedIn: 'root'
})
export class ImageManagementService {
  constructor() {}

  getImages(): Observable<ArtworkImage[]> {
    const images = JSON.parse(localStorage.getItem('artworkImages') || '[]');
    return of(images);
  }

  updateImageOrder(images: ArtworkImage[]): Observable<boolean> {
    images.forEach((img, index) => img.order = index + 1);
    localStorage.setItem('artworkImages', JSON.stringify(images));
    return of(true);
  }

  toggleImageVisibility(id: string): Observable<boolean> {
    const images: ArtworkImage[] = JSON.parse(localStorage.getItem('artworkImages') || '[]');
    const image = images.find(img => img.id === id);
    if (image) {
      image.isVisible = !image.isVisible;
      localStorage.setItem('artworkImages', JSON.stringify(images));
      return of(true);
    }
    return of(false);
  }

  deleteImage(id: string): Observable<boolean> {
    const images: ArtworkImage[] = JSON.parse(localStorage.getItem('artworkImages') || '[]');
    const filtered = images.filter(img => img.id !== id);
    localStorage.setItem('artworkImages', JSON.stringify(filtered));
    return of(true);
  }
}
