import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AdminUser } from '../../shared/models/admin-user.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authStatusSubject = new BehaviorSubject<boolean>(this.hasValidSession());
  public authStatus$ = this.authStatusSubject.asObservable();

  constructor() {}

  login(username: string, password: string): Observable<boolean> {
    return new Observable(observer => {
      const isValid = username === environment.adminCredentials.username && 
                      password === environment.adminCredentials.password;
      
      if (isValid) {
        const user: AdminUser = {
          username,
          isAuthenticated: true,
          loginTime: new Date()
        };
        localStorage.setItem('adminUser', JSON.stringify(user));
        this.authStatusSubject.next(true);
        observer.next(true);
      } else {
        observer.next(false);
      }
      observer.complete();
    });
  }

  logout(): void {
    localStorage.removeItem('adminUser');
    this.authStatusSubject.next(false);
  }

  isAuthenticated(): boolean {
    return this.hasValidSession();
  }

  private hasValidSession(): boolean {
    const userStr = localStorage.getItem('adminUser');
    if (!userStr) return false;
    
    try {
      const user: AdminUser = JSON.parse(userStr);
      return user.isAuthenticated;
    } catch {
      return false;
    }
  }

  getAuthStatus(): Observable<boolean> {
    return this.authStatus$;
  }
}
