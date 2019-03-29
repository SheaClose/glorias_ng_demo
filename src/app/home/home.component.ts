import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe(res => {
      console.log('res: ', res);
    });
  }
}
