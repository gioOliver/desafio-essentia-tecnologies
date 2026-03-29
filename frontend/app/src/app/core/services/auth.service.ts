import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  login(data: { email: string; password: string }) {
    return this.http.post<any>(`${this.api}/auth/login`, data)
      .pipe(
        tap(res => {
          localStorage.setItem('token', res.token);
        })
      );
  }

  register(data: any) {
    return this.http.post(`${this.api}/auth/register`, data);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }
}
