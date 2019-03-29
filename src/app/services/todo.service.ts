import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable()
export class TodoService {
  private API_URL: string = environment.API_URL;
  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get(`${this.API_URL}/todos`, httpOptions);
  }
}
