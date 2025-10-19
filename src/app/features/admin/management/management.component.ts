import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { ImageManagementService } from '../../../core/services/image-management.service';
import { S3Service } from '../../../core/services/s3.service';
import { ArtworkImage } from '../../../shared/models/artwork-image.model';

@Component({
  selector: 'app-management',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {
  images: ArtworkImage[] = [];
  loading = true;
  deleteConfirm: string | null = null;

  constructor(
    private imageService: ImageManagementService,
    private s3Service: S3Service,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages(): void {
    this.imageService.getImages().subscribe({
      next: (images) => {
        this.images = images.sort((a, b) => a.order - b.order);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  drop(event: CdkDragDrop<ArtworkImage[]>): void {
    moveItemInArray(this.images, event.previousIndex, event.currentIndex);
    this.imageService.updateImageOrder(this.images).subscribe();
  }

  toggleVisibility(id: string): void {
    this.imageService.toggleImageVisibility(id).subscribe({
      next: () => {
        const image = this.images.find(img => img.id === id);
        if (image) {
          image.isVisible = !image.isVisible;
        }
      }
    });
  }

  confirmDelete(id: string): void {
    this.deleteConfirm = id;
  }

  cancelDelete(): void {
    this.deleteConfirm = null;
  }

  deleteImage(id: string): void {
    const image = this.images.find(img => img.id === id);
    if (!image) return;

    this.s3Service.deleteImage(image.s3Key).subscribe({
      next: () => {
        this.imageService.deleteImage(id).subscribe({
          next: () => {
            this.images = this.images.filter(img => img.id !== id);
            this.deleteConfirm = null;
          }
        });
      }
    });
  }

  navigateToUpload(): void {
    this.router.navigate(['/admin/upload']);
  }
}
