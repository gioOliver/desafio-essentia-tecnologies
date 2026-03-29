import { Component, Input, Output, EventEmitter } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-task-modal',
  standalone: true,
  templateUrl: './task-modal.component.html',
  imports: [
    FormsModule
  ],
  styleUrls: ['./task-modal.component.css']
})
export class TaskModalComponent {

  @Input() task: any;

  @Output() close = new EventEmitter<void>();
  @Output() toggle = new EventEmitter<any>();
  @Output() delete = new EventEmitter<number>();
  @Output() update = new EventEmitter<any>();

  isEditing = false;

  editData: any = {};

  startEdit() {
    this.isEditing = true;
    this.editData = { ...this.task }; // cópia
  }

  cancelEdit() {
    this.isEditing = false;
  }

  saveEdit() {
    this.update.emit(this.editData);
    this.isEditing = false;
  }
}
