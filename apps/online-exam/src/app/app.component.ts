import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowbitService } from './shared/services/flowbit/flowbit.service';
import { initFlowbite } from 'flowbite';
import { Store } from '@ngrx/store';
import { setToken } from './core/store/auth.actions';
import { jwtDecode } from 'jwt-decode';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'online-exam';
  private readonly _flowbiteService = inject(FlowbitService);
  private readonly _store = inject(Store<string>);

  ngOnInit(): void {
    this._flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });

    this.checkAuthToken();
  }

  checkAuthToken() {
    if (
      typeof window !== 'undefined' &&
      localStorage.getItem('token') !== null
    ) {
      this._store.dispatch(
        setToken({ user: jwtDecode(localStorage.getItem('token')!) })
      );
    }
  }
}
