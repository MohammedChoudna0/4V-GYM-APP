import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
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
  @ViewChild('fileInput') fileInput: ElementRef | null = null;
  monitorAniadiendo: Monitor = new Monitor(0, '', '', '', '');
  monitor: Monitor = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    imageUrl: ''
  };
  showModal: boolean = false;
  isAddingMonitor: boolean = false;

  constructor(private monitorService: MonitorService) { }
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

  closeModal(): void {
    this.showModal = false;
  }

  addMonitor(): void {
    const newMonitor: Monitor = {
      ...this.monitor,
      imageUrl: this.monitorAniadiendo.imageUrl,
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
      phone: '',
      imageUrl: ''
    };
  }

  triggerFileInput(): void {
    if (this.fileInput && this.fileInput.nativeElement) {
      this.fileInput.nativeElement.click();
    } else {
      console.error('El input de archivo no está disponible.');
    }
  }

  onFileSelected(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.monitorAniadiendo.imageUrl = URL.createObjectURL(file);
    }
  }

}