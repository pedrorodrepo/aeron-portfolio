export interface ImageFile {
  filename: string;
  s3Key: string;
  s3Url: string;
  fileSize: number;
  dimensions: {
    width: number;
    height: number;
  };
}

export interface ArtworkImage {
  id: string;
  title?: string;
  description?: string;
  order: number;
  isVisible: boolean;
  uploadDate: Date;
  images: ImageFile[]; // Array de imagens no grupo
}
