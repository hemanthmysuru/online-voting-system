import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
    const router = inject(Router);
    const authService = inject(AuthService);

    console.log('Auth Guard: Checking authentication for route', state.url, authService.isLoggedIn());

    if (authService.isLoggedIn()) {
        return true;
    }

    // Redirect to login if token doesn't exist
    return router.createUrlTree(['/public/login']);
};
