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
    new Monitor(3, 'dsalkdal', 'dklaslkd@example.com', '273861829'),
    new Monitor(4, 'dksjafkds', '9218731@lsakj.com', '1273º1087'),
    new Monitor(3, 'dsalkdal', 'dklaslkd@example.com', '273861829'),
    new Monitor(4, 'dksjafkds', '9218731@lsakj.com', '1273º1087'),
    new Monitor(3, 'dsalkdal', 'dklaslkd@example.com', '273861829'),
    new Monitor(4, 'dksjafkds', '9218731@lsakj.com', '1'),
    // ... más monitores
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

  addMonitor(monitorToAdd: Monitor): void {
    const newId = this.monitors.length + 1;
    const newMonitor = { ...monitorToAdd, id: newId };
    this.monitors.push(newMonitor);
  }
}