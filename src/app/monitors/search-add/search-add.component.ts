import { Component, EventEmitter, Output } from '@angular/core';
import { Monitor } from '../../model/monitorModel';
import { MonitorService } from '../../services/monitors.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-add',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './search-add.component.html',
  styleUrls: ['./search-add.component.scss']
})
export class SearchAddComponent {
  monitor: Monitor = {
    id: 0,
    name: '',
    email: '',
    phone: ''
  };
  showModal: boolean = false;
  isAddingMonitor: boolean = false;

  constructor(private monitorService: MonitorService) {}
showAddMonitorForm() {
  this.isAddingMonitor = true;
}
  @Output() search = new EventEmitter<string>();
  searchQuery: string = '';

  onSearchChange(): void {
    this.search.emit(this.searchQuery);
  }

  openModal(): void {
    this.showModal = true;
  }

  // Función para cerrar el modal
  closeModal(): void {
    this.showModal = false;
  }

  addMonitor(): void {
    const newMonitor: Monitor = {
      ...this.monitor,
      id: this.monitorService.getMonitors().length + 1
    };
    
    this.monitorService.addMonitor(newMonitor as Monitor);
    this.closeModal();
    this.resetForm();
  }

  resetForm(): void {
    this.monitor = {
      id: 0,
      name: '',
      email: '',
      phone: ''
    };
  }
  
}