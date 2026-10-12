import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { NotFoundComponent } from './not-found.component';

// Mock components for routing tests
@Component({ template: '' })
class MockHomeComponent { }

@Component({ template: '' })
class MockLoginComponent { }

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NotFoundComponent,
        RouterTestingModule.withRoutes([
          { path: '', component: MockHomeComponent },
          { path: 'admin/login', component: MockLoginComponent }
        ])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render 404 error message', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.error-title')?.textContent).toContain('Página não encontrada');
  });

  it('should render error description', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.error-description')?.textContent)
      .toContain('A página que você está procurando não existe ou foi movida.');
  });

  it('should have navigation links', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const homeLink = compiled.querySelector('a[routerLink="/"]');
    const adminLink = compiled.querySelector('a[routerLink="/admin/login"]');
    
    expect(homeLink).toBeTruthy();
    expect(adminLink).toBeTruthy();
    expect(homeLink?.textContent?.trim()).toContain('Voltar ao início');
    expect(adminLink?.textContent?.trim()).toContain('Login Admin');
  });

  it('should have proper ARIA attributes for accessibility', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const errorIcon = compiled.querySelector('.error-icon');
    const buttons = compiled.querySelectorAll('.btn[role="button"]');
    
    expect(errorIcon?.getAttribute('aria-hidden')).toBe('true');
    expect(buttons.length).toBe(2);
  });

  it('should navigate to home when home link is clicked', async () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const homeLink = compiled.querySelector('a[routerLink="/"]') as HTMLElement;
    
    homeLink.click();
    fixture.detectChanges();
    await fixture.whenStable();
    
    expect(location.path()).toBe('/');
  });

  it('should navigate to admin login when admin link is clicked', async () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const adminLink = compiled.querySelector('a[routerLink="/admin/login"]') as HTMLElement;
    
    adminLink.click();
    fixture.detectChanges();
    await fixture.whenStable();
    
    expect(location.path()).toBe('/admin/login');
  });

  it('should have responsive design classes', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.not-found-container')).toBeTruthy();
    expect(compiled.querySelector('.content')).toBeTruthy();
    expect(compiled.querySelector('.navigation-links')).toBeTruthy();
  });

  it('should have proper button styling classes', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const primaryBtn = compiled.querySelector('.btn-primary');
    const secondaryBtn = compiled.querySelector('.btn-secondary');
    
    expect(primaryBtn).toBeTruthy();
    expect(secondaryBtn).toBeTruthy();
  });
});