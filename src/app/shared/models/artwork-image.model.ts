export interface ArtworkImage {
  id: string;
  filename: string;
  s3Key: string;
  s3Url: string;
  title?: string;
  description?: string;
  order: number;
  isVisible: boolean;
  uploadDate: Date;
  fileSize: number;
  dimensions: {
    width: number;
    height: number;
  };
}
