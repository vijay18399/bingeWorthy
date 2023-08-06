import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;
  constructor(private http: HttpClient) {}
  signUp(firstName: string, lastName: string, email: string, password: string) {
    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    };
    return this.http.post<any>(`${this.apiUrl}/register`, userData);
  }
  login(credentials: { email: string, password: string }) {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials);
  }
  getUserDetails() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    return this.http.get<any>(`${this.apiUrl}/user-details`, { headers });
  }
  getUserRole(){
      try {
        const token = localStorage.getItem('token');
        if(token){
          let user:any = jwt_decode(token);
          return user.userId =="64a2d72df4d3459907e02e14" ? "ADMIN" :"USER" ;
        }
        return "GUEST";
      } catch(Error) {
        return "GUEST";
      }
  }
  storeToken(token: string): void {
    localStorage.setItem('token', token);
  }
  isLoggedIn():boolean{
    return !!localStorage.getItem('token');
  }
  logout(){
    localStorage.removeItem('token');
  }
  deleteUser(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    return this.http.delete<any>(`${this.apiUrl}/delete-user/`, { headers });

  }
}
