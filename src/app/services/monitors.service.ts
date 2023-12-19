import { Injectable } from '@angular/core';
import { Monitor } from '../model/monitorModel';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {
  private monitors: Monitor[] = [
    // datos de ejemplo
    new Monitor(1, 'Nombre', 'email@example.com', '1234567890'),
    new Monitor(2, 'SLKJDADS', 'skdjs@example.com', '219807298'),
    new Monitor(3, 'dsalkdal', 'dklaslkd@example.com', '273861829'),
    new Monitor(4, 'dksjafkds', '9218731@lsakj.com', '1273º1087'),
    new Monitor(5, 'dsalkdal', 'dklaslkd@example.com', '273861829'),
    new Monitor(6, 'dksjafkds', '9218731@lsakj.com', '1273º1087'),
    new Monitor(7, 'dsalkdal', 'dklaslkd@example.com', '273861829'),
    new Monitor(8, 'dksjafkds', '9218731@lsakj.com', '1273º1087'),
    new Monitor(9, 'dsalkdal', 'dklaslkd@example.com', '273861829'),
    new Monitor(10, 'dksjafkds', '9218731@lsakj.com', '1'),
  ];

  constructor() {}

  getMonitors(): Monitor[] {
    return this.monitors;
  }

  searchMonitor(query: string): Monitor | null {
    // Convertimos el query a minúsculas para hacer una comparación insensible a mayúsculas
    const lowerCaseQuery = query.toLowerCase();

    // Encuentra el primer monitor que coincida con el nombre, email o teléfono
    const foundMonitor = this.monitors.find(monitor =>
      monitor.name.toLowerCase().includes(lowerCaseQuery) ||
      monitor.email.toLowerCase().includes(lowerCaseQuery) ||
      monitor.phone.includes(query)
    );

    return foundMonitor || null;
  }

  addMonitor(monitor: Monitor): void {
    this.monitors.push(monitor);
  }

  deleteMonitor(id: number): void {
    this.monitors = this.monitors.filter(m => m.id !== id);
  }

  updateMonitor(updatedMonitor: Monitor): void {
    const index = this.monitors.findIndex(m => m.id === updatedMonitor.id);
    if (index !== -1) {
      this.monitors[index] = updatedMonitor;
    }
  }
}