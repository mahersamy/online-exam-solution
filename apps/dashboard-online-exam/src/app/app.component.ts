import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { initFlowbite } from 'flowbite';
import { FlowbitService } from './shared/services/flowbit/flowbit.service';

@Component({
  imports: [NxWelcomeComponent, RouterOutlet,],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dashboard-online-exam';
  private readonly _flowbiteService = inject(FlowbitService);
  ngOnInit(): void {
    this._flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });

  }
}
