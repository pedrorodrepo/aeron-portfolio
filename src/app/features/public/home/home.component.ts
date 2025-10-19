import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { S3Service } from '../../../core/services/s3.service';
import { ArtworkImage } from '../../../shared/models/artwork-image.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images: ArtworkImage[] = [];
  selectedImage: ArtworkImage | null = null;
  loading = true;

  constructor(private s3Service: S3Service) {}

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages(): void {
    this.s3Service.listImages().subscribe({
      next: (images) => {
        this.images = images.filter(img => img.isVisible).sort((a, b) => a.order - b.order);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  openImage(image: ArtworkImage): void {
    this.selectedImage = image;
  }

  closeModal(): void {
    this.selectedImage = null;
  }
}
