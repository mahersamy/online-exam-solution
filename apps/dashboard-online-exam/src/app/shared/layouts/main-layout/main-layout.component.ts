import { Component } from '@angular/core';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { RouterOutlet } from '@angular/router';
import { MainNavSmallComponent } from './components/main-nav-small/main-nav-small.component';

@Component({
  selector: 'app-main-layout',
  imports: [
    MainNavComponent,
    RouterOutlet,
    MainNavSmallComponent,
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {}
