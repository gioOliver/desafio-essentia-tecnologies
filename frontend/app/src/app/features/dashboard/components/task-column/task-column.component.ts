import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskCardComponent } from '../task-card/task-card.component';

@Component({
  selector: 'app-task-column',
  standalone: true,
  imports: [TaskCardComponent],
  templateUrl: './task-column.component.html',
  styleUrls: ['./task-column.component.css']
})
export class TaskColumnComponent {

  @Input() title: string = '';
  @Input() tasks: any[] = [];

  @Output() selectTask = new EventEmitter<any>();
}
