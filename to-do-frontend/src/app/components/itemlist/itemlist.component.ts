import { Component, OnInit } from '@angular/core';
import {Task} from 'src/app/models/task';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit {

  task: Task[] = []
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTasks().subscribe((items) => {
      this.task = items;
    })
  }

  deleteTask(task: Task){
    this.todoService.deleteTask(task).subscribe(() => {
      this.task = this.task.filter((t) => t.id !== task.id);
    })
  }

  onDoneTask(task: Task){
    this.todoService.updateTask(task).subscribe(() => {
      console.log(`Updated Task with id [${task.id}]`);
    })
  }

}
