import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthNavbarComponent } from './components/auth-navbar/auth-navbar.component';
import { AuthAsideComponent } from './components/auth-aside/auth-aside.component';

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet, AuthNavbarComponent, AuthAsideComponent],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss',
})
export class AuthLayoutComponent {}
