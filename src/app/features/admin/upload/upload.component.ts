import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { S3Service } from '../../../core/services/s3.service';

interface FileWithMetadata {
  file: File;
  preview: string;
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
  filesWithMetadata: FileWithMetadata[] = [];
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
    
    validFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.filesWithMetadata.push({
          file: file,
          preview: e.target?.result as string,
          title: file.name.split('.')[0],
          description: ''
        });
      };
      reader.readAsDataURL(file);
    });
  }

  removeFile(index: number): void {
    this.filesWithMetadata.splice(index, 1);
  }

  uploadFiles(): void {
    if (this.filesWithMetadata.length === 0) return;

    this.uploading = true;
    this.uploadProgress = 0;
    let completed = 0;

    this.filesWithMetadata.forEach(fileData => {
      this.s3Service.uploadImage(fileData.file, fileData.title, fileData.description).subscribe({
        next: () => {
          completed++;
          this.uploadProgress = (completed / this.filesWithMetadata.length) * 100;
          
          if (completed === this.filesWithMetadata.length) {
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
