import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-emplist',
  standalone: true,
  imports: [MatTableModule,MatPaginatorModule,FormsModule,MatButtonModule],
  templateUrl: './emplist.component.html',
  styleUrl: './emplist.component.css'
})
export class EmplistComponent {

  constructor(private accountservice:AccountService){}


  ngOnInit()
  {

  }

  public getEmployeeServer()
  {
    this.accountservice.getEmployeedetails()
    .subscribe({
      next:(response)=>{
        console.log(response)

      },
      error:(error:any)=>{console.log(error)},
      complete:()=>{}
    })
  }

}
