import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EmplistComponent } from './emplist/emplist.component';


import { EmployeelistComponent } from './emptest/emptest.component';

export const routes: Routes = [
{path:"register",component:RegisterComponent},
{path:"login",component:LoginComponent},
{path:"emplist",component:EmplistComponent},
{path:"emptest",component:EmployeelistComponent}



];
