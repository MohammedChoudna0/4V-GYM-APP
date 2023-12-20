import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Monitor } from '../../model/monitorModel';
import { MonitorCardComponent } from './monitor-card/monitor-card.component';
import { CommonModule } from '@angular/common';
import { MonitorService } from '../../services/monitors.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-monitor-list',
  standalone: true,
  imports: [MonitorCardComponent,CommonModule, FormsModule],
  templateUrl: './monitor-list.component.html',
  styleUrl: './monitor-list.component.scss'
})
export class MonitorListComponent {
  allMonitors: Monitor[] = [];
  @Input() monitors: Monitor[] = [];
  currentIndex= 0;
  itemsPerPage = 3;
  showEditModal = false;
  monitorEditando: Monitor = new Monitor(0, '', '', '', '');
  @ViewChild('fileInput') fileInput: ElementRef | null = null;
  @Input() set searchTerm(value: string) {
    this._searchTerm = value;
    console.log('Término de búsqueda actualizado:', this._searchTerm);
    this.filterMonitors();
  }

  get searchTerm(): string {
    return this._searchTerm;
  }

  private _searchTerm = '';

  constructor(private monitorService: MonitorService) {
    this.allMonitors = this.monitorService.getMonitors();
    this.monitors = [...this.allMonitors];
  }
  
  // Función para mover el carrusel a la izquierda
  moveRight() {
    if (this.currentIndex < this.monitors.length - 1) {
      this.currentIndex++;
    }
  }
  
  // Función para mover el carrusel a la izquierda
  moveLeft() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  getMonitorsToShow(): Monitor[] {
    let startIndex = this.currentIndex;
    let endIndex = startIndex + this.itemsPerPage;
  
    if (endIndex > this.monitors.length) {
      endIndex = this.monitors.length;
      startIndex = endIndex - this.itemsPerPage;
    }
  
    let monitorsToShow = this.monitors.slice(startIndex, endIndex);
    console.log('Monitores a mostrar:', monitorsToShow);
    return monitorsToShow;
  }

  eliminar(id: number): void {
    this.allMonitors = this.allMonitors.filter(m => m.id !== id);
    this.monitors = this.monitors.filter(m => m.id !== id);
  }
  

  editar(id: number): void {
    this.currentIndex = this.monitors.findIndex(m => m.id === id);
  }
  
  abrirModalEdicion(monitor: Monitor): void {
    this.monitorEditando = { ...monitor };
    this.showEditModal = true;
  } 

  updateMonitor(): void {
    if (this.monitorEditando) {
      this.monitorService.updateMonitor(this.monitorEditando);
      this.closeEditModal();
    }
  }
  
  
  closeEditModal(): void {
    this.showEditModal = false;
  }

  onSearchChange(): void {
    this.filterMonitors();
  }

  filterMonitors(): void {
    this.monitors = this.allMonitors.filter(monitor => monitor.name.includes(this.searchTerm));
    console.log('Monitores filtrados:', this.monitors);
  }

  triggerFileInput(): void {
    if (this.fileInput && this.fileInput.nativeElement) {
      this.fileInput.nativeElement.click();
    } else {
      // Manejar el caso en que el elemento aún no esté disponible
      console.error('El input de archivo no está disponible.');
    }
  }

  onFileSelected(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.monitorEditando.imageUrl = URL.createObjectURL(file);
    }
  } 

  
}