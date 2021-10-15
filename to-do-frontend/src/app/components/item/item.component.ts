import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {Task} from 'src/app/models/task'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item!: Task;
  @Output() btnOnDelete: EventEmitter<Task> = new EventEmitter();
  @Output() btnOnDone: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  faCheckCircle = faCheckCircle;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: Task){
    this.btnOnDelete.emit(task);
  }

  onClick(task: Task) {
    this.btnOnDone.emit(task);
  }
}
