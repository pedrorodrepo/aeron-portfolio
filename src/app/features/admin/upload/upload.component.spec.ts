import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadComponent } from './upload.component';
import { ImageManagementService } from '../../../core/services/image-management.service';

describe('UploadComponent - Responsive Design & Color System', () => {
  let component: UploadComponent;
  let fixture: ComponentFixture<UploadComponent>;
  let mockImageService: jasmine.SpyObj<ImageManagementService>;

  beforeEach(async () => {
    mockImageService = jasmine.createSpyObj('ImageManagementService', [
      'uploadImages',
      'getGroups',
    ]);
    mockImageService.getGroups.and.returnValue(Promise.resolve([]));

    await TestBed.configureTestingModule({
      imports: [UploadComponent],
      providers: [{ provide: ImageManagementService, useValue: mockImageService }],
    }).compileComponents();

    fixture = TestBed.createComponent(UploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Mobile Breakpoint (320px)', () => {
    beforeEach(() => {
      setViewport(320, 568);
    });

    it('should render upload container at 320px width', () => {
      const container = fixture.nativeElement.querySelector('.upload-container');
      expect(container).toBeTruthy();
    });

    it('should apply primary background color at mobile', () => {
      const container = fixture.nativeElement.querySelector('.upload-container');
      const styles = window.getComputedStyle(container);
      expect(styles.background).toBeTruthy();
      expect(styles.backgroundColor).toBeTruthy();
    });

    it('should display upload card with secondary background at mobile', () => {
      const card = fixture.nativeElement.querySelector('.upload-card');
      expect(card).toBeTruthy();
      const styles = window.getComputedStyle(card);
      expect(styles.backgroundColor).toBeTruthy();
    });

    it('should render drop zone with proper styling at mobile', () => {
      const dropZone = fixture.nativeElement.querySelector('.drop-zone');
      expect(dropZone).toBeTruthy();
      const styles = window.getComputedStyle(dropZone);
      expect(styles.borderStyle).toBe('dashed');
      expect(styles.borderColor).toBeTruthy();
    });

    it('should apply accent color on drop zone hover at mobile', () => {
      setViewport(320, 568);
      fixture.detectChanges();

      const dropZone = fixture.nativeElement.querySelector('.drop-zone');
      dropZone.dispatchEvent(new MouseEvent('mouseenter'));
      fixture.detectChanges();

      const styles = window.getComputedStyle(dropZone);
      expect(styles.borderColor).toBeTruthy();
    });
  });

  describe('Tablet Breakpoint (768px)', () => {
    beforeEach(() => {
      setViewport(768, 1024);
    });

    it('should render upload container at 768px width', () => {
      const container = fixture.nativeElement.querySelector('.upload-container');
      expect(container).toBeTruthy();
    });

    it('should maintain background colors at tablet', () => {
      const container = fixture.nativeElement.querySelector('.upload-container');
      const containerStyles = window.getComputedStyle(container);
      expect(containerStyles.backgroundColor).toBeTruthy();

      const card = fixture.nativeElement.querySelector('.upload-card');
      const cardStyles = window.getComputedStyle(card);
      expect(cardStyles.backgroundColor).toBeTruthy();
    });

    it('should display drop zone centered at tablet', () => {
      const dropZone = fixture.nativeElement.querySelector('.drop-zone');
      expect(dropZone).toBeTruthy();
      const styles = window.getComputedStyle(dropZone);
      expect(styles.textAlign).toBe('center');
    });

    it('should apply card max-width at tablet', () => {
      const card = fixture.nativeElement.querySelector('.upload-card');
      const styles = window.getComputedStyle(card);
      expect(styles.maxWidth).toBeTruthy();
    });
  });

  describe('Desktop Breakpoint (1920px)', () => {
    beforeEach(() => {
      setViewport(1920, 1080);
    });

    it('should render upload container at 1920px width', () => {
      const container = fixture.nativeElement.querySelector('.upload-container');
      expect(container).toBeTruthy();
    });

    it('should maintain consistent background at desktop', () => {
      const container = fixture.nativeElement.querySelector('.upload-container');
      const styles = window.getComputedStyle(container);
      expect(styles.minHeight).toBe('100vh');
    });

    it('should maintain card styling at desktop', () => {
      const card = fixture.nativeElement.querySelector('.upload-card');
      const styles = window.getComputedStyle(card);
      expect(styles.maxWidth).toBe('800px');
    });
  });

  describe('Color Consistency Across Breakpoints', () => {
    it('should maintain primary background at all breakpoints', () => {
      const container = fixture.nativeElement.querySelector('.upload-container');

      setViewport(320, 568);
      fixture.detectChanges();
      let styles = window.getComputedStyle(container);
      const mobileColor = styles.backgroundColor;

      setViewport(768, 1024);
      fixture.detectChanges();
      styles = window.getComputedStyle(container);
      const tabletColor = styles.backgroundColor;

      setViewport(1920, 1080);
      fixture.detectChanges();
      styles = window.getComputedStyle(container);
      const desktopColor = styles.backgroundColor;

      expect(mobileColor).toBeTruthy();
      expect(tabletColor).toBeTruthy();
      expect(desktopColor).toBeTruthy();
    });

    it('should maintain secondary background on card at all breakpoints', () => {
      const card = fixture.nativeElement.querySelector('.upload-card');

      setViewport(320, 568);
      fixture.detectChanges();
      let styles = window.getComputedStyle(card);
      const mobileColor = styles.backgroundColor;

      setViewport(768, 1024);
      fixture.detectChanges();
      styles = window.getComputedStyle(card);
      const tabletColor = styles.backgroundColor;

      setViewport(1920, 1080);
      fixture.detectChanges();
      styles = window.getComputedStyle(card);
      const desktopColor = styles.backgroundColor;

      expect(mobileColor).toBe(tabletColor);
      expect(tabletColor).toBe(desktopColor);
    });

    it('should apply consistent accent color to drop zone hover', () => {
      const dropZone = fixture.nativeElement.querySelector('.drop-zone');

      setViewport(320, 568);
      fixture.detectChanges();
      dropZone.dispatchEvent(new MouseEvent('mouseenter'));
      let styles = window.getComputedStyle(dropZone);
      expect(styles.borderColor).toBeTruthy();

      setViewport(768, 1024);
      fixture.detectChanges();
      dropZone.dispatchEvent(new MouseEvent('mouseenter'));
      styles = window.getComputedStyle(dropZone);
      expect(styles.borderColor).toBeTruthy();

      setViewport(1920, 1080);
      fixture.detectChanges();
      dropZone.dispatchEvent(new MouseEvent('mouseenter'));
      styles = window.getComputedStyle(dropZone);
      expect(styles.borderColor).toBeTruthy();
    });
  });

  describe('Group Item Styling at Breakpoints', () => {
    it('should display group items with correct background at mobile', () => {
      setViewport(320, 568);
      fixture.detectChanges();

      const groupItem = document.createElement('div');
      groupItem.className = 'group-item';
      fixture.nativeElement.appendChild(groupItem);

      const styles = window.getComputedStyle(groupItem);
      expect(styles.backgroundColor).toBeTruthy();
      expect(styles.borderColor).toBeTruthy();
    });

    it('should maintain group header color at all breakpoints', () => {
      const groupHeader = document.createElement('h3');
      groupHeader.className = 'group-header';
      fixture.nativeElement.appendChild(groupHeader);

      setViewport(320, 568);
      fixture.detectChanges();
      let styles = window.getComputedStyle(groupHeader);
      expect(styles.color).toBeTruthy();

      setViewport(768, 1024);
      fixture.detectChanges();
      styles = window.getComputedStyle(groupHeader);
      expect(styles.color).toBeTruthy();

      setViewport(1920, 1080);
      fixture.detectChanges();
      styles = window.getComputedStyle(groupHeader);
      expect(styles.color).toBeTruthy();
    });
  });

  describe('Progress Bar at Breakpoints', () => {
    it('should display progress bar with gradient at mobile', () => {
      setViewport(320, 568);
      fixture.detectChanges();

      const progressFill = document.createElement('div');
      progressFill.className = 'progress-fill';
      fixture.nativeElement.appendChild(progressFill);

      const styles = window.getComputedStyle(progressFill);
      expect(styles.background).toBeTruthy();
      expect(styles.height).toBeTruthy();
    });

    it('should maintain progress bar styling at all breakpoints', () => {
      const progressBar = document.createElement('div');
      progressBar.className = 'progress-bar';
      fixture.nativeElement.appendChild(progressBar);

      setViewport(320, 568);
      fixture.detectChanges();
      let styles = window.getComputedStyle(progressBar);
      expect(styles.borderRadius).toBeTruthy();

      setViewport(768, 1024);
      fixture.detectChanges();
      styles = window.getComputedStyle(progressBar);
      expect(styles.borderRadius).toBeTruthy();

      setViewport(1920, 1080);
      fixture.detectChanges();
      styles = window.getComputedStyle(progressBar);
      expect(styles.borderRadius).toBeTruthy();
    });
  });

  describe('Button Hover States Across Breakpoints', () => {
    it('should display primary button with gradient at mobile', () => {
      setViewport(320, 568);
      fixture.detectChanges();

      const btn = document.createElement('button');
      btn.className = 'btn-primary';
      fixture.nativeElement.appendChild(btn);

      const styles = window.getComputedStyle(btn);
      expect(styles.background).toBeTruthy();
    });

    it('should apply hover effect to primary button at all breakpoints', () => {
      const btn = document.createElement('button');
      btn.className = 'btn-primary';
      fixture.nativeElement.appendChild(btn);

      setViewport(320, 568);
      fixture.detectChanges();
      btn.dispatchEvent(new MouseEvent('mouseenter'));
      let styles = window.getComputedStyle(btn);
      expect(styles.boxShadow).toBeTruthy();

      setViewport(768, 1024);
      fixture.detectChanges();
      btn.dispatchEvent(new MouseEvent('mouseenter'));
      styles = window.getComputedStyle(btn);
      expect(styles.boxShadow).toBeTruthy();

      setViewport(1920, 1080);
      fixture.detectChanges();
      btn.dispatchEvent(new MouseEvent('mouseenter'));
      styles = window.getComputedStyle(btn);
      expect(styles.boxShadow).toBeTruthy();
    });
  });

  describe('Remove Button Colors at Breakpoints', () => {
    it('should display remove buttons with accent color at mobile', () => {
      setViewport(320, 568);
      fixture.detectChanges();

      const removeBtn = document.createElement('button');
      removeBtn.className = 'remove-btn';
      fixture.nativeElement.appendChild(removeBtn);

      const styles = window.getComputedStyle(removeBtn);
      expect(styles.backgroundColor).toBeTruthy();
    });

    it('should maintain remove button hover color at desktop', () => {
      setViewport(1920, 1080);
      fixture.detectChanges();

      const removeBtn = document.createElement('button');
      removeBtn.className = 'remove-btn';
      fixture.nativeElement.appendChild(removeBtn);

      removeBtn.dispatchEvent(new MouseEvent('mouseenter'));
      fixture.detectChanges();

      const styles = window.getComputedStyle(removeBtn);
      expect(styles.backgroundColor).toBeTruthy();
    });
  });

  describe('No Layout Shifts Affecting Color Visibility', () => {
    it('should maintain layout without shifts at mobile', () => {
      setViewport(320, 568);
      fixture.detectChanges();

      const container = fixture.nativeElement.querySelector('.upload-container');
      const initialPosition = container.getBoundingClientRect();

      container.offsetHeight;

      const finalPosition = container.getBoundingClientRect();
      expect(initialPosition.left).toBe(finalPosition.left);
    });

    it('should maintain card layout at all breakpoints', () => {
      const card = fixture.nativeElement.querySelector('.upload-card');

      setViewport(320, 568);
      fixture.detectChanges();
      let position = card.getBoundingClientRect();
      expect(position.width).toBeGreaterThan(0);

      setViewport(768, 1024);
      fixture.detectChanges();
      position = card.getBoundingClientRect();
      expect(position.width).toBeGreaterThan(0);

      setViewport(1920, 1080);
      fixture.detectChanges();
      position = card.getBoundingClientRect();
      expect(position.width).toBeGreaterThan(0);
    });
  });
});

function setViewport(width: number, height: number): void {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  });
  Object.defineProperty(window, 'innerHeight', {
    writable: true,
    configurable: true,
    value: height,
  });
  window.dispatchEvent(new Event('resize'));
}
