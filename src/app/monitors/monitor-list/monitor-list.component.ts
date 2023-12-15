import { Component, Input } from '@angular/core';
import { Monitor } from '../../model/monitorModel';
import { MonitorCardComponent } from './monitor-card/monitor-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-monitor-list',
  standalone: true,
  imports: [MonitorCardComponent,CommonModule],
  templateUrl: './monitor-list.component.html',
  styleUrl: './monitor-list.component.scss'
})
export class MonitorListComponent {
  @Input() monitors: Monitor[] = [];
  currentIndex= 0;
  itemsPerPage = 3;

  constructor() { }

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
      transform: `translateX(-${this.currentIndex * 100}%)`,
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
  
}