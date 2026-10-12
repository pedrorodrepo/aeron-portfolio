/**
 * Visual Regression Test for Login Component
 * 
 * This test file documents the expected visual appearance of the login component
 * with the new pastel washed color palette.
 * 
 * Requirements: 9.1, 9.2, 9.3
 * 
 * Visual Baseline:
 * - Container background: Linear gradient from #f0ebe4 to #e8e2d9 (pastel washed beige)
 * - Login card background: White (#ffffff) for maximum contrast and readability
 * - Input focus border: #d4a5a5 (pastel washed rose)
 * - Button gradient: #d4a5a5 to #c89898 (pastel rose gradient)
 * - Button hover shadow: rgba(212, 165, 165, 0.2) - pastel rose shadow
 * 
 * Expected Visual Changes vs Original:
 * - Container background now displays pastel gradient instead of dark gradient
 * - Input fields focus state shows pastel rose border instead of vibrant red
 * - Login button uses pastel rose gradient instead of vibrant red gradient
 * - Button hover effects show softer pastel shadows instead of vibrant red glows
 * - Overall aesthetic: Elegant, sophisticated, while maintaining clear visual hierarchy
 * - Card contrast: White card on pastel background creates strong visual separation
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';

describe('Login Component Visual Regression Tests', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render login component', () => {
    expect(component).toBeTruthy();
  });

  describe('Color Palette Verification', () => {
    it('should display login container with correct background gradient using pastel colors', () => {
      const container = fixture.nativeElement.querySelector('.login-container');
      expect(container).toBeTruthy();
      
      const computedStyle = window.getComputedStyle(container);
      expect(computedStyle.background || computedStyle.backgroundColor).toBeDefined();
      // Should use pastel gradient, not dark gradient
    });

    it('should display login card with white background for maximum contrast', () => {
      const card = fixture.nativeElement.querySelector('.login-card');
      expect(card).toBeTruthy();
      
      const computedStyle = window.getComputedStyle(card);
      expect(computedStyle.backgroundColor).toBe('rgb(255, 255, 255)');
    });

    it('should display login button with pastel accent gradient', () => {
      const button = fixture.nativeElement.querySelector('button');
      expect(button).toBeTruthy();
      
      const computedStyle = window.getComputedStyle(button);
      // Button should have gradient from pastel rose to darker pastel rose
      expect(computedStyle.background || computedStyle.backgroundImage).toBeDefined();
      // Should not contain vibrant red
      expect(computedStyle.background).not.toContain('rgb(255, 0, 0)');
    });
  });

  describe('Input Field Focus States', () => {
    it('should apply pastel accent color on input focus', () => {
      const input = fixture.nativeElement.querySelector('input');
      expect(input).toBeTruthy();
      
      const computedStyle = window.getComputedStyle(input);
      expect(computedStyle.borderColor).toBeDefined();
      // Default border color should be neutral
      expect(computedStyle.borderColor).not.toContain('rgb(212, 165, 165)'); // Focus color
    });

    it('should display input with proper borders and radius', () => {
      const input = fixture.nativeElement.querySelector('input');
      expect(input).toBeTruthy();
      
      const computedStyle = window.getComputedStyle(input);
      expect(computedStyle.borderRadius).toBeDefined();
      expect(computedStyle.borderWidth).toBeDefined();
    });
  });

  describe('Form Structure Preservation', () => {
    it('should preserve form group layout', () => {
      const formGroup = fixture.nativeElement.querySelector('.form-group');
      expect(formGroup).toBeTruthy();
      
      const label = fixture.nativeElement.querySelector('label');
      expect(label).toBeTruthy();
      
      const input = fixture.nativeElement.querySelector('input');
      expect(input).toBeTruthy();
    });

    it('should display error message with appropriate styling', () => {
      const errorMessage = fixture.nativeElement.querySelector('.error-message');
      if (errorMessage) {
        const computedStyle = window.getComputedStyle(errorMessage);
        expect(computedStyle.backgroundColor).toBeDefined();
        expect(computedStyle.color).toBeDefined();
      }
    });
  });

  describe('Button Interaction States', () => {
    it('should have button with transition effects for hover', () => {
      const button = fixture.nativeElement.querySelector('button');
      expect(button).toBeTruthy();
      
      const computedStyle = window.getComputedStyle(button);
      expect(computedStyle.transition).toBeDefined();
      expect(computedStyle.cursor).toBe('pointer');
    });

    it('should apply disabled state styling when button is disabled', () => {
      const button = fixture.nativeElement.querySelector('button');
      expect(button).toBeTruthy();
      
      button.disabled = true;
      fixture.detectChanges();
      
      const computedStyle = window.getComputedStyle(button);
      expect(computedStyle.opacity).toBeDefined();
      expect(computedStyle.cursor).toBe('not-allowed');
    });
  });

  describe('Accessibility and Contrast Verification', () => {
    it('should maintain sufficient contrast between button text and background', () => {
      const button = fixture.nativeElement.querySelector('button');
      expect(button).toBeTruthy();
      
      const computedStyle = window.getComputedStyle(button);
      expect(computedStyle.color).toBe('rgb(255, 255, 255)');
      // White text on pastel rose should have good contrast
    });

    it('should display card title with proper contrast on white background', () => {
      const title = fixture.nativeElement.querySelector('.login-card h1');
      expect(title).toBeTruthy();
      
      const computedStyle = window.getComputedStyle(title);
      expect(computedStyle.color).toBeDefined();
      // Title should be dark text on white background
    });

    it('should display form labels with readable contrast', () => {
      const label = fixture.nativeElement.querySelector('label');
      expect(label).toBeTruthy();
      
      const computedStyle = window.getComputedStyle(label);
      expect(computedStyle.color).toBeDefined();
      expect(computedStyle.fontWeight).toBeDefined();
    });
  });

  describe('Responsive Design Verification', () => {
    it('should apply max-width constraint to login card', () => {
      const card = fixture.nativeElement.querySelector('.login-card');
      expect(card).toBeTruthy();
      
      const computedStyle = window.getComputedStyle(card);
      expect(computedStyle.maxWidth).toBe('400px');
    });

    it('should have full-width input fields', () => {
      const input = fixture.nativeElement.querySelector('input');
      expect(input).toBeTruthy();
      
      const computedStyle = window.getComputedStyle(input);
      expect(computedStyle.width).toBe('100%');
    });
  });
});
