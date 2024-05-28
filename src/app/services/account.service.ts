import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/register-user';
import { Observable } from 'rxjs';
import { LoginUser } from '../models/login-user';

const API_BASE_URL:string ="https://localhost:7161/api/Account/register"
const API_BASE_URL1:string ="https://localhost:7161/api/Account/login"
const API_BASE_URL2:string="https://localhost:7161/api/Account/logout"
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  public currentUsername:string | null=null; 

  constructor(private httpclient:HttpClient) { }

  public postRegister(registerUser:RegisterUser):Observable<RegisterUser>
  {
    return this.httpclient.post<RegisterUser>(`${API_BASE_URL}`,registerUser)
  }

  public postLogin(loginUser:LoginUser):Observable<LoginUser>
  {
    return this.httpclient.post<LoginUser>(`${API_BASE_URL1}`,loginUser)
  }

  public getLogout():Observable<string>
  {
    return this.httpclient.get<string>(`${API_BASE_URL2}`)
  }

  public getEmployeedetails()
  {
      return this.httpclient.get<RegisterUser[]>(`${API_BASE_URL}`)
  }
}
