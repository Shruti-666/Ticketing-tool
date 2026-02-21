import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginComponent } from '../pages/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiUrl: string = "/api/TicketsNew/";
  constructor(private http: HttpClient) {   }

  login(loginData: any){
    return this.http.post(this.apiUrl + "Login", loginData);
  }
}
