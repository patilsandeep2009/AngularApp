import { Component, inject } from '@angular/core';
import { RouterOutlet,RouterLink,RouterLinkActive, Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { AccountService } from './services/account.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatToolbarModule, MatButtonModule, MatIconModule,RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EmployeeApp';

constructor(public accountService:AccountService,private router:Router){
  router:inject(Router)
 
}

onLogOutClicked(){
  this.accountService.getLogout().subscribe({
    next:(response:string)=>{
      this.accountService.currentUserName=null;
      this.router.navigate(['/login'])
      
    },
    error:(error)=>{
console.log(error)

    },
    complete:()=>{}
  })
}
}
