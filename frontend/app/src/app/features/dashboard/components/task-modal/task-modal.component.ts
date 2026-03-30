import { Component
  , Input
  , Output
  , EventEmitter
  , OnInit
  , OnDestroy } from '@angular/core';
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
export class TaskModalComponent implements OnInit, OnDestroy {

  @Input() task: any;

  @Output() close = new EventEmitter<void>();
  @Output() toggle = new EventEmitter<any>();
  @Output() delete = new EventEmitter<number>();
  @Output() update = new EventEmitter<any>();
  @Input() error: string = '';

  isEditing = false;
  isCreating = false;

  editData: any = {};

  maxTitleLength = 190;
  maxDescriptionLength = 1500;

  ngOnInit() {
    document.body.style.overflow = 'hidden';
  }

  ngOnDestroy() {
    document.body.style.overflow = 'auto';
  }

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
    if (this.isCreating) {
      this.close.emit();
      return;
    }

    this.isEditing = false;
  }

  saveEdit() {
    this.error = '';

    if (!this.editData.title || this.editData.title.trim() === '') {
      this.error = 'Título é obrigatório';
      return;
    }

    if (this.editData.title.length > this.maxTitleLength) {
      this.error = `Título deve ter no máximo ${this.maxTitleLength} caracteres`;
      return;
    }

    if (this.editData.description?.length > this.maxDescriptionLength) {
      this.error = `Descrição deve ter no máximo ${this.maxDescriptionLength} caracteres`;
      return;
    }

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
