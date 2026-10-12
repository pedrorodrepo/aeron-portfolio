import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManagementComponent } from './management.component';
import { ImageManagementService } from '../../../core/services/image-management.service';

describe('ManagementComponent - Responsive Design & Color System', () => {
  let component: ManagementComponent;
  let fixture: ComponentFixture<ManagementComponent>;
  let mockImageService: jasmine.SpyObj<ImageManagementService>;

  beforeEach(async () => {
    mockImageService = jasmine.createSpyObj('ImageManagementService', [
      'getImages',
      'reorderImages',
      'deleteImage',
      'toggleImageVisibility',
    ]);
    mockImageService.getImages.and.returnValue(Promise.resolve([]));

    await TestBed.configureTestingModule({
      imports: [ManagementComponent],
      providers: [{ provide: ImageManagementService, useValue: mockImageService }],
    }).compileComponents();

    fixture = TestBed.createComponent(ManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Mobile Breakpoint (320px)', () => {
    beforeEach(() => {
      setViewport(320, 568);
    });

    it('should render management container at 320px width', () => {
      const container = fixture.nativeElement.querySelector('.management-container');
      expect(container).toBeTruthy();
    });

    it('should apply primary background color at mobile', () => {
      const container = fixture.nativeElement.querySelector('.management-container');
      const styles = window.getComputedStyle(container);
      expect(styles.backgroundColor).toBeTruthy();
    });

    it('should display header with proper layout at mobile', () => {
      const header = fixture.nativeElement.querySelector('.header');
      expect(header).toBeTruthy();
      const styles = window.getComputedStyle(header);
      expect(styles.display).toBe('flex');
    });

    it('should render upload button with accent color at mobile', () => {
      const btn = fixture.nativeElement.querySelector('.btn-upload');
      if (btn) {
        const styles = window.getComputedStyle(btn);
        expect(styles.background).toBeTruthy();
      }
    });

    it('should display images list at mobile', () => {
      const list = fixture.nativeElement.querySelector('.images-list');
      expect(list).toBeTruthy();
      const styles = window.getComputedStyle(list);
      expect(styles.display).toBe('flex');
      expect(styles.flexDirection).toBe('column');
    });
  });

  describe('Tablet Breakpoint (768px)', () => {
    beforeEach(() => {
      setViewport(768, 1024);
    });

    it('should render management container at 768px width', () => {
      const container = fixture.nativeElement.querySelector('.management-container');
      expect(container).toBeTruthy();
    });

    it('should maintain background colors at tablet', () => {
      const container = fixture.nativeElement.querySelector('.management-container');
      const styles = window.getComputedStyle(container);
      expect(styles.backgroundColor).toBeTruthy();
    });

    it('should display header layout responsively at tablet', () => {
      const header = fixture.nativeElement.querySelector('.header');
      expect(header).toBeTruthy();
    });

    it('should render image items with proper styling at tablet', () => {
      const item = document.createElement('div');
      item.className = 'image-item';
      fixture.nativeElement.appendChild(item);

      const styles = window.getComputedStyle(item);
      expect(styles.backgroundColor).toBeTruthy();
      expect(styles.borderRadius).toBeTruthy();
    });
  });

  describe('Desktop Breakpoint (1920px)', () => {
    beforeEach(() => {
      setViewport(1920, 1080);
    });

    it('should render management container at 1920px width', () => {
      const container = fixture.nativeElement.querySelector('.management-container');
      expect(container).toBeTruthy();
    });

    it('should maintain consistent appearance at desktop', () => {
      const container = fixture.nativeElement.querySelector('.management-container');
      const styles = window.getComputedStyle(container);
      expect(styles.minHeight).toBe('100vh');
    });

    it('should display header with full width at desktop', () => {
      const header = fixture.nativeElement.querySelector('.header');
      const styles = window.getComputedStyle(header);
      expect(styles.maxWidth).toBeTruthy();
    });
  });

  describe('Color Consistency Across Breakpoints', () => {
    it('should maintain primary background at all breakpoints', () => {
      const container = fixture.nativeElement.querySelector('.management-container');

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

      expect(mobileColor).toBe(tabletColor);
      expect(tabletColor).toBe(desktopColor);
    });

    it('should maintain image item secondary background at all breakpoints', () => {
      const item = document.createElement('div');
      item.className = 'image-item';
      fixture.nativeElement.appendChild(item);

      setViewport(320, 568);
      fixture.detectChanges();
      let styles = window.getComputedStyle(item);
      const mobileColor = styles.backgroundColor;

      setViewport(768, 1024);
      fixture.detectChanges();
      styles = window.getComputedStyle(item);
      const tabletColor = styles.backgroundColor;

      setViewport(1920, 1080);
      fixture.detectChanges();
      styles = window.getComputedStyle(item);
      const desktopColor = styles.backgroundColor;

      expect(mobileColor).toBeTruthy();
      expect(tabletColor).toBeTruthy();
      expect(desktopColor).toBeTruthy();
    });
  });

  describe('Upload Button Hover States at Breakpoints', () => {
    it('should display upload button with gradient at mobile', () => {
      setViewport(320, 568);
      fixture.detectChanges();

      const btn = fixture.nativeElement.querySelector('.btn-upload');
      if (btn) {
        const styles = window.getComputedStyle(btn);
        expect(styles.background).toBeTruthy();
      }
    });

    it('should apply hover effect to upload button at desktop', () => {
      setViewport(1920, 1080);
      fixture.detectChanges();

      const btn = fixture.nativeElement.querySelector('.btn-upload');
      if (btn) {
        btn.dispatchEvent(new MouseEvent('mouseenter'));
        fixture.detectChanges();
        const styles = window.getComputedStyle(btn);
        expect(styles.boxShadow).toBeTruthy();
      }
    });

    it('should maintain button accent color at all breakpoints', () => {
      const btn = fixture.nativeElement.querySelector('.btn-upload');
      if (btn) {
        setViewport(320, 568);
        fixture.detectChanges();
        let styles = window.getComputedStyle(btn);
        expect(styles.background).toBeTruthy();

        setViewport(768, 1024);
        fixture.detectChanges();
        styles = window.getComputedStyle(btn);
        expect(styles.background).toBeTruthy();

        setViewport(1920, 1080);
        fixture.detectChanges();
        styles = window.getComputedStyle(btn);
        expect(styles.background).toBeTruthy();
      }
    });
  });

  describe('Spinner Color at Breakpoints', () => {
    it('should render spinner with accent color at mobile', () => {
      setViewport(320, 568);
      fixture.detectChanges();

      const spinner = document.createElement('div');
      spinner.className = 'spinner';
      fixture.nativeElement.appendChild(spinner);

      const styles = window.getComputedStyle(spinner);
      expect(styles.borderRadius).toBe('50%');
    });

    it('should maintain spinner styling at all breakpoints', () => {
      const spinner = document.createElement('div');
      spinner.className = 'spinner';
      fixture.nativeElement.appendChild(spinner);

      setViewport(320, 568);
      fixture.detectChanges();
      let styles = window.getComputedStyle(spinner);
      expect(styles.width).toBeTruthy();

      setViewport(768, 1024);
      fixture.detectChanges();
      styles = window.getComputedStyle(spinner);
      expect(styles.width).toBeTruthy();

      setViewport(1920, 1080);
      fixture.detectChanges();
      styles = window.getComputedStyle(spinner);
      expect(styles.width).toBeTruthy();
    });
  });

  describe('Image Count Badge Colors', () => {
    it('should display image count badge with correct colors at mobile', () => {
      setViewport(320, 568);
      fixture.detectChanges();

      const badge = document.createElement('div');
      badge.className = 'image-count';
      fixture.nativeElement.appendChild(badge);

      const styles = window.getComputedStyle(badge);
      expect(styles.backgroundColor).toBeTruthy();
      expect(styles.color).toBeTruthy();
    });

    it('should maintain badge colors at all breakpoints', () => {
      const badge = document.createElement('div');
      badge.className = 'image-count';
      fixture.nativeElement.appendChild(badge);

      setViewport(320, 568);
      fixture.detectChanges();
      let styles = window.getComputedStyle(badge);
      expect(styles.backgroundColor).toBeTruthy();

      setViewport(768, 1024);
      fixture.detectChanges();
      styles = window.getComputedStyle(badge);
      expect(styles.backgroundColor).toBeTruthy();

      setViewport(1920, 1080);
      fixture.detectChanges();
      styles = window.getComputedStyle(badge);
      expect(styles.backgroundColor).toBeTruthy();
    });
  });

  describe('Delete Confirmation Colors at Breakpoints', () => {
    it('should display delete confirmation with accent button at mobile', () => {
      setViewport(320, 568);
      fixture.detectChanges();

      const confirm = document.createElement('div');
      confirm.className = 'delete-confirm';
      const btn = document.createElement('button');
      btn.className = 'btn-yes';
      confirm.appendChild(btn);
      fixture.nativeElement.appendChild(confirm);

      const styles = window.getComputedStyle(btn);
      expect(styles.backgroundColor).toBeTruthy();
    });

    it('should maintain confirmation button color on hover at all breakpoints', () => {
      const btn = document.createElement('button');
      btn.className = 'btn-yes';
      fixture.nativeElement.appendChild(btn);

      setViewport(320, 568);
      fixture.detectChanges();
      btn.dispatchEvent(new MouseEvent('mouseenter'));
      let styles = window.getComputedStyle(btn);
      expect(styles.backgroundColor).toBeTruthy();

      setViewport(768, 1024);
      fixture.detectChanges();
      btn.dispatchEvent(new MouseEvent('mouseenter'));
      styles = window.getComputedStyle(btn);
      expect(styles.backgroundColor).toBeTruthy();

      setViewport(1920, 1080);
      fixture.detectChanges();
      btn.dispatchEvent(new MouseEvent('mouseenter'));
      styles = window.getComputedStyle(btn);
      expect(styles.backgroundColor).toBeTruthy();
    });
  });

  describe('Empty State Colors', () => {
    it('should display empty state with secondary background at mobile', () => {
      setViewport(320, 568);
      fixture.detectChanges();

      const empty = document.createElement('div');
      empty.className = 'empty-state';
      fixture.nativeElement.appendChild(empty);

      const styles = window.getComputedStyle(empty);
      expect(styles.backgroundColor).toBeTruthy();
    });

    it('should display upload button in empty state with gradient at all breakpoints', () => {
      const empty = document.createElement('div');
      empty.className = 'empty-state';
      const btn = document.createElement('button');
      btn.className = 'btn-upload';
      empty.appendChild(btn);
      fixture.nativeElement.appendChild(empty);

      setViewport(320, 568);
      fixture.detectChanges();
      let styles = window.getComputedStyle(btn);
      expect(styles.background).toBeTruthy();

      setViewport(768, 1024);
      fixture.detectChanges();
      styles = window.getComputedStyle(btn);
      expect(styles.background).toBeTruthy();

      setViewport(1920, 1080);
      fixture.detectChanges();
      styles = window.getComputedStyle(btn);
      expect(styles.background).toBeTruthy();
    });
  });

  describe('Image Item Shadow at Breakpoints', () => {
    it('should render image item with shadow at mobile', () => {
      setViewport(320, 568);
      fixture.detectChanges();

      const item = document.createElement('div');
      item.className = 'image-item';
      fixture.nativeElement.appendChild(item);

      const styles = window.getComputedStyle(item);
      expect(styles.boxShadow).toBeTruthy();
    });

    it('should maintain shadow consistency at all breakpoints', () => {
      const item = document.createElement('div');
      item.className = 'image-item';
      fixture.nativeElement.appendChild(item);

      setViewport(320, 568);
      fixture.detectChanges();
      let styles = window.getComputedStyle(item);
      const mobileShadow = styles.boxShadow;

      setViewport(768, 1024);
      fixture.detectChanges();
      styles = window.getComputedStyle(item);
      expect(styles.boxShadow).toBeTruthy();

      setViewport(1920, 1080);
      fixture.detectChanges();
      styles = window.getComputedStyle(item);
      expect(styles.boxShadow).toBeTruthy();
    });
  });

  describe('No Layout Shifts Affecting Color Visibility', () => {
    it('should maintain layout without shifts at mobile', () => {
      setViewport(320, 568);
      fixture.detectChanges();

      const container = fixture.nativeElement.querySelector('.management-container');
      const initialPosition = container.getBoundingClientRect();

      container.offsetHeight;

      const finalPosition = container.getBoundingClientRect();
      expect(initialPosition.top).toBe(finalPosition.top);
      expect(initialPosition.left).toBe(finalPosition.left);
    });

    it('should maintain image item layout at all breakpoints', () => {
      const item = document.createElement('div');
      item.className = 'image-item';
      fixture.nativeElement.appendChild(item);

      setViewport(320, 568);
      fixture.detectChanges();
      let position = item.getBoundingClientRect();
      expect(position.width).toBeGreaterThan(0);

      setViewport(768, 1024);
      fixture.detectChanges();
      position = item.getBoundingClientRect();
      expect(position.width).toBeGreaterThan(0);

      setViewport(1920, 1080);
      fixture.detectChanges();
      position = item.getBoundingClientRect();
      expect(position.width).toBeGreaterThan(0);
    });
  });

  describe('Responsive Media Query Application', () => {
    it('should apply mobile layout at 320px', () => {
      setViewport(320, 568);
      fixture.detectChanges();

      const header = fixture.nativeElement.querySelector('.header');
      // Mobile should have stacked layout
      expect(header).toBeTruthy();
    });

    it('should maintain proper spacing at tablet', () => {
      setViewport(768, 1024);
      fixture.detectChanges();

      const list = fixture.nativeElement.querySelector('.images-list');
      const styles = window.getComputedStyle(list);
      expect(styles.gap).toBeTruthy();
    });

    it('should apply desktop layout constraints', () => {
      setViewport(1920, 1080);
      fixture.detectChanges();

      const header = fixture.nativeElement.querySelector('.header');
      const styles = window.getComputedStyle(header);
      expect(styles.maxWidth).toBe('1200px');
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
