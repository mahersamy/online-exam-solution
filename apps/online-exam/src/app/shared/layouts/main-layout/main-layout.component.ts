import { Component } from '@angular/core';
import { MainNavComponent } from "./components/main-nav/main-nav.component";
import { MainAsideComponent } from "./components/main-aside/main-aside.component";
import { HomeComponent } from "../../../features/pages/home/home.component";
import { RouterOutlet } from '@angular/router';
import { MainNavSmallComponent } from "./components/main-nav-small/main-nav-small.component";

@Component({
  selector: 'app-main-layout',
  imports: [MainNavComponent, MainAsideComponent, RouterOutlet, MainNavSmallComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
