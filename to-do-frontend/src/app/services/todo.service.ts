import { Injectable } from '@angular/core';
import {Task} from 'src/app/models/task';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseUrl: string = "http://localhost:5000/tasks";

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.baseUrl);
  }

  deleteTask(task: Task): Observable<Task>{
    const deleteUri = `${this.baseUrl}/${task.id}`
    return this.http.delete<Task>(deleteUri);
  }

  updateTask(task: Task): Observable<Task> {
    const updateUri = `${this.baseUrl}/${task.id}`
    task.reminder = !task.reminder;
    return this.http.put<Task>(updateUri, task);
  }
}
