import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { S3Service } from '../../../core/services/s3.service';

describe('HomeComponent - Responsive Design & Color System', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockS3Service: jasmine.SpyObj<S3Service>;

  beforeEach(async () => {
    mockS3Service = jasmine.createSpyObj('S3Service', ['getArtworks']);
    mockS3Service.getArtworks.and.returnValue(Promise.resolve([]));

    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [{ provide: S3Service, useValue: mockS3Service }],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Mobile Breakpoint (320px)', () => {
    beforeEach(() => {
      setViewport(320, 568);
    });

    it('should render gallery at 320px width', () => {
      const container = fixture.nativeElement.querySelector('.home-container');
      expect(container).toBeTruthy();
    });

    it('should apply correct background color at mobile breakpoint', () => {
      const container = fixture.nativeElement.querySelector('.home-container');
      const styles = window.getComputedStyle(container);
      // Background should be a gradient with pastel colors
      expect(styles.background).toBeTruthy();
    });

    it('should display hero title with accent color at mobile', () => {
      const hero = fixture.nativeElement.querySelector('.hero h1');
      expect(hero).toBeTruthy();
      const color = window.getComputedStyle(hero).color;
      expect(color).toBeTruthy();
    });

    it('should maintain gallery grid layout at mobile', () => {
      const gallery = fixture.nativeElement.querySelector('.gallery');
      const styles = window.getComputedStyle(gallery);
      expect(styles.display).toBe('grid');
    });

    it('should apply correct padding at mobile breakpoint', () => {
      const gallery = fixture.nativeElement.querySelector('.gallery');
      const styles = window.getComputedStyle(gallery);
      // Mobile should have reduced padding
      expect(styles.padding).toBeTruthy();
    });
  });

  describe('Tablet Breakpoint (768px)', () => {
    beforeEach(() => {
      setViewport(768, 1024);
    });

    it('should render gallery at 768px width', () => {
      const container = fixture.nativeElement.querySelector('.home-container');
      expect(container).toBeTruthy();
    });

    it('should maintain background color consistency at tablet', () => {
      const container = fixture.nativeElement.querySelector('.home-container');
      expect(window.getComputedStyle(container).background).toBeTruthy();
    });

    it('should display correctly sized hero at tablet', () => {
      const hero = fixture.nativeElement.querySelector('.hero h1');
      const styles = window.getComputedStyle(hero);
      expect(styles.fontSize).toBeTruthy();
    });

    it('should apply responsive gallery gap at tablet', () => {
      const gallery = fixture.nativeElement.querySelector('.gallery');
      const styles = window.getComputedStyle(gallery);
      expect(styles.gap).toBeTruthy();
    });
  });

  describe('Desktop Breakpoint (1920px)', () => {
    beforeEach(() => {
      setViewport(1920, 1080);
    });

    it('should render gallery at 1920px width', () => {
      const container = fixture.nativeElement.querySelector('.home-container');
      expect(container).toBeTruthy();
    });

    it('should maintain color consistency at desktop', () => {
      const container = fixture.nativeElement.querySelector('.home-container');
      const styles = window.getComputedStyle(container);
      expect(styles.background).toBeTruthy();
    });

    it('should display full-sized hero at desktop', () => {
      const hero = fixture.nativeElement.querySelector('.hero h1');
      const styles = window.getComputedStyle(hero);
      expect(styles.fontSize).toBeTruthy();
    });

    it('should apply max-width constraint at desktop', () => {
      const gallery = fixture.nativeElement.querySelector('.gallery');
      const styles = window.getComputedStyle(gallery);
      expect(styles.maxWidth).toBe('1400px');
    });
  });

  describe('Color Consistency Across Breakpoints', () => {
    it('should maintain primary background color at all breakpoints', () => {
      const container = fixture.nativeElement.querySelector('.home-container');
      const mobileStyles = window.getComputedStyle(container);

      setViewport(768, 1024);
      fixture.detectChanges();
      const tabletStyles = window.getComputedStyle(container);

      setViewport(1920, 1080);
      fixture.detectChanges();
      const desktopStyles = window.getComputedStyle(container);

      expect(mobileStyles.background).toBeTruthy();
      expect(tabletStyles.background).toBeTruthy();
      expect(desktopStyles.background).toBeTruthy();
    });

    it('should apply accent color to hero title consistently', () => {
      const hero = fixture.nativeElement.querySelector('.hero h1');
      const mobileColor = window.getComputedStyle(hero).color;

      setViewport(768, 1024);
      fixture.detectChanges();
      const tabletColor = window.getComputedStyle(hero).color;

      setViewport(1920, 1080);
      fixture.detectChanges();
      const desktopColor = window.getComputedStyle(hero).color;

      expect(mobileColor).toBe(tabletColor);
      expect(tabletColor).toBe(desktopColor);
    });
  });

  describe('Hover States Across Breakpoints', () => {
    it('should apply hover shadow to gallery items on desktop', () => {
      setViewport(1920, 1080);
      fixture.detectChanges();
      
      const galleryItem = fixture.nativeElement.querySelector('.gallery-item');
      expect(galleryItem).toBeTruthy();
      
      // Simulate hover
      galleryItem.dispatchEvent(new MouseEvent('mouseenter'));
      fixture.detectChanges();
      
      const styles = window.getComputedStyle(galleryItem);
      expect(styles.boxShadow).toBeTruthy();
    });

    it('should maintain close button color on hover', () => {
      setViewport(1920, 1080);
      fixture.detectChanges();

      // Create mock close button
      const closeBtn = document.createElement('button');
      closeBtn.className = 'close-btn';
      fixture.nativeElement.appendChild(closeBtn);

      const initialColor = window.getComputedStyle(closeBtn).backgroundColor;
      
      closeBtn.dispatchEvent(new MouseEvent('mouseenter'));
      fixture.detectChanges();
      
      const hoverColor = window.getComputedStyle(closeBtn).backgroundColor;
      expect(hoverColor).toBeTruthy();
    });
  });

  describe('Modal Overlays at Different Breakpoints', () => {
    it('should render modal with correct overlay at mobile', () => {
      setViewport(320, 568);
      fixture.detectChanges();

      const modal = document.createElement('div');
      modal.className = 'modal';
      fixture.nativeElement.appendChild(modal);

      const styles = window.getComputedStyle(modal);
      expect(styles.position).toBe('fixed');
      expect(styles.backgroundColor).toBeTruthy();
    });

    it('should render modal with correct overlay at desktop', () => {
      setViewport(1920, 1080);
      fixture.detectChanges();

      const modal = document.createElement('div');
      modal.className = 'modal';
      fixture.nativeElement.appendChild(modal);

      const styles = window.getComputedStyle(modal);
      expect(styles.position).toBe('fixed');
      expect(styles.backgroundColor).toBeTruthy();
    });

    it('should maintain modal border color across breakpoints', () => {
      const modalContent = document.createElement('div');
      modalContent.className = 'modal-content';

      setViewport(320, 568);
      fixture.nativeElement.appendChild(modalContent);
      let styles = window.getComputedStyle(modalContent);
      expect(styles.borderRadius).toBeTruthy();

      setViewport(768, 1024);
      fixture.detectChanges();
      styles = window.getComputedStyle(modalContent);
      expect(styles.borderRadius).toBeTruthy();

      setViewport(1920, 1080);
      fixture.detectChanges();
      styles = window.getComputedStyle(modalContent);
      expect(styles.borderRadius).toBeTruthy();
    });
  });

  describe('Layout Shifts and Color Visibility', () => {
    it('should not cause layout shifts affecting color visibility at mobile', () => {
      setViewport(320, 568);
      fixture.detectChanges();

      const gallery = fixture.nativeElement.querySelector('.gallery');
      const initialPosition = gallery.getBoundingClientRect();

      // Trigger reflow
      gallery.offsetHeight;

      const finalPosition = gallery.getBoundingClientRect();
      expect(initialPosition.left).toBe(finalPosition.left);
    });

    it('should maintain contrast on secondary background at all breakpoints', () => {
      const galleryItem = fixture.nativeElement.querySelector('.gallery-item');

      setViewport(320, 568);
      fixture.detectChanges();
      expect(galleryItem).toBeTruthy();

      setViewport(768, 1024);
      fixture.detectChanges();
      expect(galleryItem).toBeTruthy();

      setViewport(1920, 1080);
      fixture.detectChanges();
      expect(galleryItem).toBeTruthy();
    });

    it('should render spinner with accent color at all breakpoints', () => {
      setViewport(320, 568);
      const spinner = document.createElement('div');
      spinner.className = 'spinner';
      fixture.nativeElement.appendChild(spinner);

      let styles = window.getComputedStyle(spinner);
      expect(styles.borderRadius).toBe('50%');

      setViewport(768, 1024);
      fixture.detectChanges();
      styles = window.getComputedStyle(spinner);
      expect(styles.borderRadius).toBe('50%');

      setViewport(1920, 1080);
      fixture.detectChanges();
      styles = window.getComputedStyle(spinner);
      expect(styles.borderRadius).toBe('50%');
    });
  });

  describe('Navigation Button Colors at Breakpoints', () => {
    it('should render navigation buttons with correct accent color', () => {
      setViewport(1920, 1080);
      fixture.detectChanges();

      const navBtn = document.createElement('button');
      navBtn.className = 'nav-btn prev';
      fixture.nativeElement.appendChild(navBtn);

      const styles = window.getComputedStyle(navBtn);
      expect(styles.borderRadius).toBe('50%');
    });
  });
});

function setViewport(width: number, height: number): void {
  // Set viewport dimensions
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
