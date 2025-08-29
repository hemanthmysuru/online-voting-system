import { Component } from '@angular/core';
import { Header } from '../shared/header/header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  standalone: true,
  imports: [RouterOutlet, Header],
})
export class User {}
