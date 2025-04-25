import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthApiService } from 'auth-api';
import { Subject, takeUntil } from 'rxjs';
import { SubjectModalComponent } from "../../../../../features/pages/home/components/subject-modal/subject-modal.component";
import { SubjectApiService } from 'subjects';

@Component({
  selector: 'app-main-nav',
  imports: [SubjectModalComponent],
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.scss',
})
export class MainNavComponent {
  private readonly _router = inject(Router);
  private readonly _authApiService = inject(AuthApiService);
  private readonly _subjectApiService = inject(SubjectApiService);
  private readonly destroy$ = new Subject<void>();
  addDialog:boolean=false;


  closeAddDialog(){
    this.addDialog=false
  }


  showAddDialog(){
    this.addDialog=true;
  }


  logOut() {
    this._authApiService
      .logOut()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          localStorage.clear();
          this._router.navigate(['/auth/login']);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  



}
