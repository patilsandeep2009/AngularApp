import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTableDataSource, MatTableModule} from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { AccountService } from '../services/account.service';
import { RegisterUser } from '../models/register-user';
import { ReactiveFormsModule } from '@angular/forms';

import { register } from 'module';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-emplist',
  standalone: true,
  imports: [MatTableModule,MatPaginatorModule,MatSortModule,FormsModule,MatButtonModule,MatPaginatorModule,MatInputModule],
  templateUrl: './emplist.component.html',
  styleUrl: './emplist.component.css'
})
export class EmplistComponent {

  constructor(private accountservice:AccountService){}

  displayedColumns:string[]=['name']

  employeelist=new MatTableDataSource<RegisterUser>();

  ngOnInit()
  {
    this.getEmployeeServer();
  }

  public getEmployeeServer()
  {
    this.accountservice.getEmployeedetails()
    .subscribe({
      next:(response:any)=>{
        console.log(response)
        this.employeelist.data=response,
        this.accountservice.currentUserName=response.email
          

      },
      error:(error:any)=>{console.log(error)},
      complete:()=>{}
    })
  }

  search:string="";
applyFilter(value:any){
  this.employeelist.filter=this.search;
  this.employeelist.sort;


}


}
