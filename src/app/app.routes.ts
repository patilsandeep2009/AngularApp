import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EmplistComponent } from './emplist/emplist.component';

export const routes: Routes = [
{path:"register",component:RegisterComponent},
{path:"login",component:LoginComponent},
{path:"emplist",component:EmplistComponent}


];
