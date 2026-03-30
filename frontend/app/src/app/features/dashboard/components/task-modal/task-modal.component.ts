import { Component, Input, Output, EventEmitter } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-task-modal',
  standalone: true,
  templateUrl: './task-modal.component.html',
  imports: [
    FormsModule,
    DatePipe
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
  isCreating = false;

  editData: any = {};

  ngOnChanges() {
    if (this.task) {
      this.isCreating = !this.task.id;
    }
  }

  startEdit() {
    this.isEditing = true;
    this.editData = {
      ...this.task,
      dueDate: this.formatDateForInput(this.task.dueDate)
    };
  }

  cancelEdit() {
    this.isEditing = false;
    this.isCreating = false;
  }

  saveEdit() {
    this.update.emit(this.editData);
  }

  formatDateForInput(date: string): string {
    if (!date) return '';

    const d = new Date(date);

    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }
}
