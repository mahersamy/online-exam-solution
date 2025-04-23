import { Component, inject} from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthApiService } from 'auth-api';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-main-nav-small',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './main-nav-small.component.html',
  styleUrl: './main-nav-small.component.scss',
})
export class MainNavSmallComponent {
  private readonly _authApiService=inject(AuthApiService);
  private readonly _router=inject(Router);
  private readonly destroy$ = new Subject<void>();
  

  isSearchHidden: boolean = false;
  isLinksHiddden: boolean = false;


  searchHiddenToggle() {
    this.isSearchHidden = !this.isSearchHidden;
  }

  linksHiddenToggle() {
    this.isLinksHiddden = !this.isLinksHiddden;
  }

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
