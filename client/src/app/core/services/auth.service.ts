import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = false;

  constructor(private router: Router) {}

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  login(email: string, password: string): void {
    this.loggedIn = true;
    this.router.navigate(['/user']);
  }

  logout(): void {
    this.loggedIn = false;
    this.router.navigate(['/login']);
  }
}
