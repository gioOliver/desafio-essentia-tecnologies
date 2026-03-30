import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { TaskService } from '../../../core/services/task.service';
import { CommonModule } from '@angular/common';
import { TaskColumnComponent } from '../../../features/dashboard/components/task-column/task-column.component';
import { TaskModalComponent } from '../../../features/dashboard/components/task-modal/task-modal.component';
import { ConfirmModalComponent } from '../../../shared/components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  imports: [
    CommonModule,
    TaskColumnComponent,
    TaskModalComponent,
    ConfirmModalComponent
  ],
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tasks: any[] = [];
  todoTasks: any[] = [];
  doneTasks: any[] = [];
  selectedTask: any = null;
  user: any = null;
  confirmDeleteId: number | null = null;

  constructor(
    private taskService: TaskService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadTasks();
    const userData = localStorage.getItem('user');

    if (userData) {
      this.user = JSON.parse(userData);
    }
  }

  loadTasks() {
    this.taskService.getTasks().subscribe({
      next: (data) => {
        this.tasks = data;

        this.todoTasks = this.tasks.filter(task => task.status == false);
        this.doneTasks = this.tasks.filter(task => task.status == true);

        this.cdr.detectChanges();
      },
      error: (err) => console.error(err)
    });
  }

  openTask(task: any) {
    this.selectedTask = task;
  }

  closeModal() {
    this.selectedTask = null;
  }

  toggleTask(task: any) {
    const updated = {
      ...task,
      status: !task.status
    };

    this.taskService.updateTask(task.id, updated).subscribe(() => {
      this.loadTasks();
      this.closeModal();
    });
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(() => {
      this.loadTasks();
      this.closeModal();
    });
  }

  updateTask(task: any) {
    if (task.id) {
      this.taskService.updateTask(task.id, task).subscribe(() => {
        this.loadTasks();
        this.closeModal();
      });
    } else {
      this.taskService.createTask(task).subscribe(() => {
        this.loadTasks();
        this.closeModal();
      });
    }
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');

    window.location.href = '/';
  }

  openCreateModal() {
    this.selectedTask = {
      title: '',
      description: '',
      dueDate: '',
      status: false
    };
  }

  openDeleteConfirm(id: number) {
    this.confirmDeleteId = id;
  }

  closeConfirm() {
    this.confirmDeleteId = null;
  }

  confirmDelete() {
    if (!this.confirmDeleteId) return;

    this.taskService.deleteTask(this.confirmDeleteId).subscribe(() => {
      this.loadTasks();
      this.closeConfirm();
      this.closeModal();
    });
  }

}
