import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ElectionService } from './election.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    private readonly TOKEN = 'jwt_token';

    constructor(
        private router: Router,
        private electionService: ElectionService,
    ) { }

    private setToken(token: string) {
        localStorage.setItem(this.TOKEN, token);
    }

    private getToken(): string | null {
        return localStorage.getItem(this.TOKEN);
    }

    private removeToken(): void {
        localStorage.removeItem(this.TOKEN);
    }

    isLoggedIn(): boolean {
        return this.getToken() !== null;
    }

    login(email: string, password: string): void {
        this.electionService.login({ email, password }).subscribe({
            next: (response) => {
                if (response && response.token) {
                    this.router.navigate(['/user']);
                    this.setToken(response.token);
                }
            },
            error: (err) => {
                console.error('Login failed', err);
            },
        });
    }

    logout(): void {
        this.electionService.logout().subscribe({
            next: () => {
                console.log('Logged out successfully');
                this.removeToken()
                this.router.navigate(['/login']);
            },
            error: (err) => {
                console.error('Logout failed', err);
            },
        });
    }
}
