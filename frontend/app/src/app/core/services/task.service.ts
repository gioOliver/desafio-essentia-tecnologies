import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private api = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get<any[]>(`${this.api}/tasks`);
  }

  createTask(data: any) {
    return this.http.post(`${this.api}/tasks`, data);
  }

  updateTask(id: number, data: any) {
    return this.http.put(`${this.api}/tasks/${id}`, data);
  }

  deleteTask(id: number) {
    return this.http.delete(`${this.api}/tasks/${id}`);
  }
}
