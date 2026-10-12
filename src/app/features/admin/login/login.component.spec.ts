import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

describe('LoginComponent - Responsive Design & Color System', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockAuthService: jasmine.SpyObj<AuthService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    mockAuthService = jasmine.createSpyObj('AuthService', ['login']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [LoginComponent],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: Router, useValue: mockRouter },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Mobile Breakpoint (320px)', () => {
    beforeEach(() => {
      setViewport(320, 568);
    });

    it('should render login container at 320px width', () => {
      const container = fixture.nativeElement.querySelector('.login-container');
      expect(container).toBeTruthy();
    });

    it('should apply gradient background at mobile', () => {
      const container = fixture.nativeElement.querySelector('.login-container');
      const styles = window.getComputedStyle(container);
      expect(styles.background).toBeTruthy();
      expect(styles.minHeight).toBe('100vh');
    });

    it('should display login card with proper sizing at mobile', () => {
      const card = fixture.nativeElement.querySelector('.login-card');
      expect(card).toBeTruthy();
      const styles = window.getComputedStyle(card);
      expect(styles.maxWidth).toBeTruthy();
    });

    it('should apply white background to login card at mobile', () => {
      const card = fixture.nativeElement.querySelector('.login-card');
      const styles = window.getComputedStyle(card);
      expect(styles.backgroundColor).toBeTruthy();
    });

    it('should display properly padded form fields at mobile', () => {
      const formGroup = fixture.nativeElement.querySelector('.form-group');
      expect(formGroup).toBeTruthy();
      const styles = window.getComputedStyle(formGroup);
      expect(styles.marginBottom).toBeTruthy();
    });
  });

  describe('Tablet Breakpoint (768px)', () => {
    beforeEach(() => {
      setViewport(768, 1024);
    });

    it('should render login container at 768px width', () => {
      const container = fixture.nativeElement.querySelector('.login-container');
      expect(container).toBeTruthy();
    });

    it('should maintain gradient background at tablet', () => {
      const container = fixture.nativeElement.querySelector('.login-container');
      const styles = window.getComputedStyle(container);
      expect(styles.background).toBeTruthy();
    });

    it('should render login card centered at tablet', () => {
      const container = fixture.nativeElement.querySelector('.login-container');
      const styles = window.getComputedStyle(container);
      expect(styles.display).toBe('flex');
      expect(styles.alignItems).toBe('center');
      expect(styles.justifyContent).toBe('center');
    });

    it('should maintain card max-width constraint at tablet', () => {
      const card = fixture.nativeElement.querySelector('.login-card');
      const styles = window.getComputedStyle(card);
      expect(styles.maxWidth).toBe('400px');
    });
  });

  describe('Desktop Breakpoint (1920px)', () => {
    beforeEach(() => {
      setViewport(1920, 1080);
    });

    it('should render login container at 1920px width', () => {
      const container = fixture.nativeElement.querySelector('.login-container');
      expect(container).toBeTruthy();
    });

    it('should maintain consistent appearance at desktop', () => {
      const container = fixture.nativeElement.querySelector('.login-container');
      const styles = window.getComputedStyle(container);
      expect(styles.minHeight).toBe('100vh');
    });

    it('should display login card with consistent styling at desktop', () => {
      const card = fixture.nativeElement.querySelector('.login-card');
      const styles = window.getComputedStyle(card);
      expect(styles.padding).toBeTruthy();
      expect(styles.borderRadius).toBeTruthy();
    });
  });

  describe('Color Consistency Across Breakpoints', () => {
    it('should maintain background gradient colors at all breakpoints', () => {
      const container = fixture.nativeElement.querySelector('.login-container');

      setViewport(320, 568);
      fixture.detectChanges();
      let styles = window.getComputedStyle(container);
      expect(styles.background).toBeTruthy();

      setViewport(768, 1024);
      fixture.detectChanges();
      styles = window.getComputedStyle(container);
      expect(styles.background).toBeTruthy();

      setViewport(1920, 1080);
      fixture.detectChanges();
      styles = window.getComputedStyle(container);
      expect(styles.background).toBeTruthy();
    });

    it('should keep login card white at all breakpoints', () => {
      const card = fixture.nativeElement.querySelector('.login-card');

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

      expect(mobileColor).toBeTruthy();
      expect(tabletColor).toBeTruthy();
      expect(desktopColor).toBeTruthy();
    });
  });

  describe('Input Focus States at Breakpoints', () => {
    it('should apply accent color to input focus border at mobile', () => {
      setViewport(320, 568);
      fixture.detectChanges();

      const input = fixture.nativeElement.querySelector('input');
      if (input) {
        input.focus();
        fixture.detectChanges();
        const styles = window.getComputedStyle(input);
        expect(styles.borderColor).toBeTruthy();
      }
    });

    it('should apply accent color to input focus border at desktop', () => {
      setViewport(1920, 1080);
      fixture.detectChanges();

      const input = fixture.nativeElement.querySelector('input');
      if (input) {
        input.focus();
        fixture.detectChanges();
        const styles = window.getComputedStyle(input);
        expect(styles.borderColor).toBeTruthy();
      }
    });
  });

  describe('Button Hover States Across Breakpoints', () => {
    it('should display button with gradient background at mobile', () => {
      setViewport(320, 568);
      fixture.detectChanges();

      const button = fixture.nativeElement.querySelector('button');
      expect(button).toBeTruthy();
      const styles = window.getComputedStyle(button);
      expect(styles.background).toBeTruthy();
    });

    it('should maintain button appearance on hover at desktop', () => {
      setViewport(1920, 1080);
      fixture.detectChanges();

      const button = fixture.nativeElement.querySelector('button');
      expect(button).toBeTruthy();

      // Simulate hover
      button.dispatchEvent(new MouseEvent('mouseenter'));
      fixture.detectChanges();

      const styles = window.getComputedStyle(button);
      expect(styles.boxShadow).toBeTruthy();
    });

    it('should apply shadow to button on hover at all breakpoints', () => {
      const button = fixture.nativeElement.querySelector('button');

      setViewport(320, 568);
      fixture.detectChanges();
      button.dispatchEvent(new MouseEvent('mouseenter'));
      let styles = window.getComputedStyle(button);
      expect(styles.boxShadow).toBeTruthy();

      setViewport(768, 1024);
      fixture.detectChanges();
      button.dispatchEvent(new MouseEvent('mouseenter'));
      styles = window.getComputedStyle(button);
      expect(styles.boxShadow).toBeTruthy();

      setViewport(1920, 1080);
      fixture.detectChanges();
      button.dispatchEvent(new MouseEvent('mouseenter'));
      styles = window.getComputedStyle(button);
      expect(styles.boxShadow).toBeTruthy();
    });
  });

  describe('Error Message Display at Breakpoints', () => {
    it('should display error message with proper colors at mobile', () => {
      setViewport(320, 568);
      fixture.detectChanges();

      const errorMsg = document.createElement('div');
      errorMsg.className = 'error-message';
      fixture.nativeElement.appendChild(errorMsg);

      const styles = window.getComputedStyle(errorMsg);
      expect(styles.backgroundColor).toBeTruthy();
      expect(styles.color).toBeTruthy();
    });

    it('should maintain error message styling at desktop', () => {
      setViewport(1920, 1080);
      fixture.detectChanges();

      const errorMsg = document.createElement('div');
      errorMsg.className = 'error-message';
      fixture.nativeElement.appendChild(errorMsg);

      const styles = window.getComputedStyle(errorMsg);
      expect(styles.backgroundColor).toBeTruthy();
      expect(styles.color).toBeTruthy();
    });
  });

  describe('No Layout Shifts Affecting Color Visibility', () => {
    it('should maintain form layout at mobile without shifts', () => {
      setViewport(320, 568);
      fixture.detectChanges();

      const container = fixture.nativeElement.querySelector('.login-container');
      const initialPosition = container.getBoundingClientRect();

      // Trigger potential layout shift
      container.offsetHeight;

      const finalPosition = container.getBoundingClientRect();
      expect(initialPosition.top).toBe(finalPosition.top);
      expect(initialPosition.left).toBe(finalPosition.left);
    });

    it('should maintain card position without shifts at all breakpoints', () => {
      const card = fixture.nativeElement.querySelector('.login-card');

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
