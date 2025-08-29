import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  constructor(
    public authService: AuthService,
    private router: Router,
  ) {}

  public login(): void {
    console.log('Login button clicked');
    this.router.navigate(['/public/login']);
  }
}
