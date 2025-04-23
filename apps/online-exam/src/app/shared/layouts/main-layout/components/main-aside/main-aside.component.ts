import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthApiService } from 'auth-api';
import { Subject, takeUntil } from 'rxjs';


@Component({
  selector: 'app-main-aside',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './main-aside.component.html',
  styleUrl: './main-aside.component.scss'
})
export class MainAsideComponent {
  private readonly _router=inject(Router);
  private readonly _authApiService=inject(AuthApiService);
  private readonly destroy$ = new Subject<void>();
  
  logOut(){
    this._authApiService.logOut().pipe(takeUntil(this.destroy$)).subscribe(
      {
        next:(res)=>{
          localStorage.clear();
          this._router.navigate(["/auth/login"]);
        },
        error:(error)=>{
          console.log(error);
        }
      }
    )
   

  }

}
