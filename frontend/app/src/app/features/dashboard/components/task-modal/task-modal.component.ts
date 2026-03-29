import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-modal',
  standalone: true,
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.css']
})
export class TaskModalComponent {

  @Input() task: any;

  @Output() close = new EventEmitter<void>();
  @Output() toggle = new EventEmitter<any>();
  @Output() delete = new EventEmitter<number>();

}
