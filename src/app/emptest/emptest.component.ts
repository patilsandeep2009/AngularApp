import { HttpClient } from '@angular/common/http';
import {AfterViewInit, Component, ViewChild, inject, viewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

import { Router,ActivatedRoute } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { MatSortModule ,MatSort,Sort} from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import {IEmplist} from '../interface/Empl';

import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-emptest',
  standalone: true,
  imports: [MatTableModule,MatPaginatorModule,MatSortModule,FormsModule,MatButtonModule,MatPaginatorModule,MatInputModule],
  templateUrl: './emptest.component.html',
  styleUrl: './emptest.component.css'
})
export class EmployeelistComponent {

  constructor(private accountService:AccountService){
    
  }
  router=inject(Router)
  route=inject(ActivatedRoute)

 
  displayedColumns: string[] = ['name','salary','email','region','city','action'];
  employeeList=new MatTableDataSource<IEmplist>();
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatPaginator) paginator!:MatPaginator;

 // @ViewChild(MatSort) sort!:MatSort;
 // @ViewChild(MatPaginator) paginator!:MatPaginator;
  //dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

 // @ViewChild(MatPaginator) paginator: MatPaginator;
ngOnInit(){
  this.getEmployeebyserver()
}

ngAfterViewInit(){
  this.employeeList.sort=this.sort;
  this.employeeList.paginator=this.paginator;
}



 public getEmployeebyserver()
{
  this.accountService.getEmployeedetails()
  .subscribe
  ({
    next:(response:any)=>{
      
     this.employeeList.data=response,
     this.accountService.currentUserName=response.email
      console.log(response)
       
    },
    error:(error:any)=>{console.log(error)},
    complete:()=>{}
  })
}
edit(id:number)
{
 // this.id=this.route.snapshot.params['id'];

  this.router.navigateByUrl('/employee/'+id)
} 
gfrm()
{
  this.router.navigateByUrl('/employeeform');
}


search:string="";
applyFilter(value:any){
  this.employeeList.filter=this.search;
  this.employeeList.sort;


}


}
