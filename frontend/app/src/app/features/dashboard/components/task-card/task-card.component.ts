import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-card',
  standalone: true,
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent {

  @Input() task: any;
  @Output() select = new EventEmitter<any>();

  onClick() {
    this.select.emit(this.task);
  }
}
