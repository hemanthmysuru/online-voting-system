import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../shared/header/header';

@Component({
  selector: 'app-public',
  templateUrl: './public.html',
  styleUrl: './public.scss',
  standalone: true,
  imports: [RouterOutlet, Header],
})
export class Public {}
