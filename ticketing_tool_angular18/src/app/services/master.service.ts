import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginComponent } from '../pages/login/login.component';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  apiUrl: string = 'http://localhost:3001/'; // Direct connection
  constructor(private http: HttpClient) {}

  login(loginData: any) {
    return this.http.get<any[]>(
      `http://localhost:3001/Login?emailId=${loginData.emailId}&password=${loginData.password}`
    );
  }

  getAllDepartments() {
    return this.http.get<any>(`${this.apiUrl}GetDepartments`);
  }
  createNewDepartments(obj: any) {
    return this.http.post<any>(`${this.apiUrl}GetDepartments`, obj);
  }
  updateDepartments(id: number, obj: any) {
    return this.http.put(`${this.apiUrl}GetDepartments/${id}`, obj);
  }
  deleteDepartments(id: string) {
    return this.http.delete(`${this.apiUrl}GetDepartments/${id}`);
  }

  getAllpCategory() {
    return this.http.get<any>(`${this.apiUrl}GetParentCategory`);
  }
  createpCategorys(obj: any) {
    return this.http.post<any>(`${this.apiUrl}GetParentCategory`, obj);
  }
  updatepCategory(id: number, obj: any) {
    return this.http.put(`${this.apiUrl}GetParentCategory/${id}`, obj);
  }
  deletepCategory(id: string) {
    return this.http.delete(`${this.apiUrl}GetParentCategory/${id}`);
  }
}
