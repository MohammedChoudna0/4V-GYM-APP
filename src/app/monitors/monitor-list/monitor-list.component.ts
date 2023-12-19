import { Component, Input } from '@angular/core';
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
  @Input() monitors: Monitor[] = [];
  currentIndex= 0;
  itemsPerPage = 3;
  showEditModal = false;
  monitorEditando: Monitor = new Monitor(0, '', '', '');

  constructor(private monitorService: MonitorService) {
    this.monitors = this.monitorService.getMonitors();
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

  getCarouselStyle() {
    return {
      transition: 'transform 1s ease'
    };
  }

  getMonitorsToShow(): Monitor[] {
    let startIndex = this.currentIndex;
    let endIndex = startIndex + this.itemsPerPage;
  
    if (endIndex > this.monitors.length) {
      endIndex = this.monitors.length;
      startIndex = endIndex - this.itemsPerPage;
    }
  
    return this.monitors.slice(startIndex, endIndex);
  }

  // monitor-list.component.ts
  eliminar(id: number): void {
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

}