import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { S3Service } from '../../../core/services/s3.service';

interface FileWithMetadata {
  file: File;
  preview: string;
}

interface ImageGroup {
  files: FileWithMetadata[];
  title: string;
  description: string;
}

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  imageGroups: ImageGroup[] = [];
  uploading = false;
  uploadProgress = 0;
  message = '';

  constructor(
    private s3Service: S3Service,
    private router: Router
  ) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.processFiles(Array.from(input.files));
    }
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    if (event.dataTransfer?.files) {
      this.processFiles(Array.from(event.dataTransfer.files));
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  processFiles(files: File[]): void {
    const validFiles = files.filter(file => file.type.startsWith('image/'));
    
    const filesWithMetadata: FileWithMetadata[] = [];
    let processed = 0;
    
    validFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        filesWithMetadata.push({
          file: file,
          preview: e.target?.result as string
        });
        processed++;
        
        if (processed === validFiles.length) {
          // Criar novo grupo com as imagens
          this.imageGroups.push({
            files: filesWithMetadata,
            title: filesWithMetadata.length === 1 ? filesWithMetadata[0].file.name.split('.')[0] : 'New Artwork',
            description: ''
          });
        }
      };
      reader.readAsDataURL(file);
    });
  }

  removeGroup(groupIndex: number): void {
    this.imageGroups.splice(groupIndex, 1);
  }

  removeFileFromGroup(groupIndex: number, fileIndex: number): void {
    this.imageGroups[groupIndex].files.splice(fileIndex, 1);
    if (this.imageGroups[groupIndex].files.length === 0) {
      this.removeGroup(groupIndex);
    }
  }

  uploadGroups(): void {
    if (this.imageGroups.length === 0) return;

    this.uploading = true;
    this.uploadProgress = 0;
    let completed = 0;

    this.imageGroups.forEach(group => {
      this.s3Service.uploadImageGroup(group.files.map(f => f.file), group.title, group.description).subscribe({
        next: () => {
          completed++;
          this.uploadProgress = (completed / this.imageGroups.length) * 100;
          
          if (completed === this.imageGroups.length) {
            this.message = 'Upload successful!';
            setTimeout(() => {
              this.router.navigate(['/admin/management']);
            }, 1500);
          }
        },
        error: () => {
          this.uploading = false;
          this.message = 'Upload failed';
        }
      });
    });
  }
}
