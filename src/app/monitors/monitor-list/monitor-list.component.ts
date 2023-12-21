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
  showEditModal = false;
  monitorEditando: Monitor = new Monitor(0, '', '', '', '');
  currentIndex = 0;
  itemsPerPage = 3;
  @ViewChild('fileInput') fileInput: ElementRef | null = null;
  @Input() set searchTerm(value: string) {
    this._searchTerm = value;
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
    let first = this.monitors.shift();
    if (first) {
      this.monitors.push(first);
    }
  }
  
  // Función para mover el carrusel a la izquierda
  moveLeft() {
    let last = this.monitors.pop();
    if (last) {
      this.monitors.unshift(last);
    }
  }

  // Función para obtener todos los monitores
  getMonitors(): Monitor[] {
    return this.monitors.slice(this.currentIndex, this.itemsPerPage);;
  } 

  eliminar(id: number): void {
    this.allMonitors = this.allMonitors.filter(m => m.id !== id);
    this.monitors = this.monitors.filter(m => m.id !== id);
  }
  
  //función para editar un monitor
  editar(id: number): void {
    this.abrirModalEdicion(this.allMonitors.find(m => m.id === id)!);
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

  // Función para obtener los monitores según la búsqueda
  filterMonitors(): void {
    if (this._searchTerm) {
      this.monitors = this.allMonitors.filter(monitor => 
        monitor.name.toLowerCase().includes(this._searchTerm.toLowerCase())
      );
    } else {
      this.monitors = [...this.allMonitors];
    }
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