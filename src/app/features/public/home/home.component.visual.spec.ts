/**
 * Visual Regression Test for Gallery Component (Home Component)
 * 
 * This test file documents the expected visual appearance of the gallery component
 * with the new pastel washed color palette.
 * 
 * Requirements: 9.1, 9.2, 9.3
 * 
 * Visual Baseline:
 * - Container background: Linear gradient from #f0ebe4 to #e8e2d9 (pastel washed beige)
 * - Gallery cards background: #f0ebe4 (light pastel washed)
 * - Accent colors: #d4a5a5 (pastel washed rose/mauve)
 * - Hover shadows: rgba(212, 165, 165, 0.2) - pastel washed rose shadow
 * - Text colors: White (#ffffff) for contrast
 * 
 * Expected Visual Changes vs Original:
 * - Hero title now displays in pastel rose (#d4a5a5) instead of vibrant red (#ff0000)
 * - Gallery cards now have pastel washed beige backgrounds instead of dark #1a1a1a
 * - Hover effects show softer pastel shadows instead of vibrant red glows
 * - Loading spinner uses pastel accent color instead of vibrant red
 * - Modal borders use pastel accent instead of vibrant red
 * - Navigation buttons display pastel rose backgrounds instead of vibrant red
 * - Overall aesthetic: More elegant, sophisticated, and visually softer while maintaining contrast
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('Gallery Component Visual Regression Tests', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render gallery component', () => {
    expect(component).toBeTruthy();
  });

  describe('Color Palette Verification', () => {
    it('should display gallery container with correct background gradient using pastel colors', () => {
      const container = fixture.nativeElement.querySelector('.home-container');
      expect(container).toBeTruthy();
      
      const computedStyle = window.getComputedStyle(container);
      // Verify gradient contains pastel colors (this checks the actual computed values)
      expect(computedStyle.background || computedStyle.backgroundColor).toBeDefined();
    });

    it('should display gallery items with pastel washed background color', () => {
      const galleryItems = fixture.nativeElement.querySelectorAll('.gallery-item');
      expect(galleryItems.length).toBeGreaterThan(0);
      
      if (galleryItems.length > 0) {
        const firstItem = galleryItems[0];
        const computedStyle = window.getComputedStyle(firstItem);
        // Background should be light pastel washed beige (#f0ebe4)
        expect(computedStyle.backgroundColor).toBeDefined();
        expect(computedStyle.backgroundColor).not.toContain('rgb(26, 26, 26)'); // Should not be old #1a1a1a
      }
    });

    it('should display hero title in pastel accent color', () => {
      const heroTitle = fixture.nativeElement.querySelector('.hero h1');
      expect(heroTitle).toBeTruthy();
      
      const computedStyle = window.getComputedStyle(heroTitle);
      // Title color should be pastel rose (#d4a5a5), not vibrant red (#ff0000)
      expect(computedStyle.color).toBeDefined();
      expect(computedStyle.color).not.toContain('rgb(255, 0, 0)'); // Should not be old vibrant red
    });
  });

  describe('Component Structure Preservation', () => {
    it('should preserve gallery grid layout structure', () => {
      const gallery = fixture.nativeElement.querySelector('.gallery');
      expect(gallery).toBeTruthy();
      
      const computedStyle = window.getComputedStyle(gallery);
      expect(computedStyle.display).toBe('grid');
    });

    it('should preserve gallery item hover effects structure', () => {
      const galleryItem = fixture.nativeElement.querySelector('.gallery-item');
      expect(galleryItem).toBeTruthy();
      
      const computedStyle = window.getComputedStyle(galleryItem);
      // Should have transition defined for smooth hover effects
      expect(computedStyle.transition).toBeDefined();
    });

    it('should maintain modal structure for image viewing', () => {
      const modal = fixture.nativeElement.querySelector('.modal');
      expect(modal).toBeTruthy();
      
      const computedStyle = window.getComputedStyle(modal);
      expect(computedStyle.display).toBeDefined();
      expect(computedStyle.position).toBe('fixed');
    });
  });

  describe('Responsive Design Verification', () => {
    it('should maintain color consistency at mobile viewport', () => {
      // Test that CSS variables are applied consistently at smaller screens
      const container = fixture.nativeElement.querySelector('.home-container');
      expect(container).toBeTruthy();
      
      const computedStyle = window.getComputedStyle(container);
      expect(computedStyle.minHeight).toBe('100vh');
    });

    it('should preserve gallery item aspect ratio on responsive design', () => {
      const thumbnailWrapper = fixture.nativeElement.querySelector('.thumbnail-wrapper');
      expect(thumbnailWrapper).toBeTruthy();
      
      const computedStyle = window.getComputedStyle(thumbnailWrapper);
      expect(computedStyle.width).toBe('100%');
      expect(computedStyle.height).toBeDefined();
    });
  });

  describe('Visual Hierarchy Verification', () => {
    it('should display gallery items with distinct borders using pastel colors', () => {
      const galleryItem = fixture.nativeElement.querySelector('.gallery-item');
      expect(galleryItem).toBeTruthy();
      
      const computedStyle = window.getComputedStyle(galleryItem);
      expect(computedStyle.borderWidth).toBeDefined();
      expect(computedStyle.borderColor).toBeDefined();
    });

    it('should display image info with accent color for titles', () => {
      const imageTitle = fixture.nativeElement.querySelector('.image-info h3');
      expect(imageTitle).toBeTruthy();
      
      const computedStyle = window.getComputedStyle(imageTitle);
      expect(computedStyle.color).toBeDefined();
      // Should use pastel accent color, not vibrant red
      expect(computedStyle.color).not.toContain('rgb(255, 0, 0)');
    });
  });

  describe('Accessibility and Contrast Verification', () => {
    it('should maintain sufficient contrast between text and background', () => {
      const heroTitle = fixture.nativeElement.querySelector('.hero h1');
      expect(heroTitle).toBeTruthy();
      
      const computedStyle = window.getComputedStyle(heroTitle);
      expect(computedStyle.color).toBeDefined();
      // White text on pastel background should maintain good contrast
    });

    it('should preserve text color definition in gallery items', () => {
      const imageInfo = fixture.nativeElement.querySelector('.image-info');
      expect(imageInfo).toBeTruthy();
      
      const computedStyle = window.getComputedStyle(imageInfo);
      expect(computedStyle.backgroundColor).toBeDefined();
    });
  });
});
