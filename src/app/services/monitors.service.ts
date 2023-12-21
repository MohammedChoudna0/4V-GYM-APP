import { Injectable } from '@angular/core';
import { Monitor } from '../model/monitorModel';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {
  private monitors: Monitor[] = [
    // datos de ejemplo
    new Monitor(1, 'Alex Johnson', 'alex.johnson@example.com', '555-0101', ''),
    new Monitor(2, 'Marta Smith', 'marta.smith@example.com', '555-0102', ''),
    new Monitor(3, 'Samuel Garcia', 'samuel.garcia@example.com', '555-0103', ''),
    new Monitor(4, 'Jennifer Lee', 'jennifer.lee@example.com', '555-0104', ''),
    new Monitor(5, 'Lucas Martinez', 'lucas.martinez@example.com', '555-0105', ''),
    new Monitor(6, 'Emma Brown', 'emma.brown@example.com', '555-0106', ''),
    new Monitor(7, 'Michael Davis', 'michael.davis@example.com', '555-0107', ''),
    new Monitor(8, 'Olivia Wilson', 'olivia.wilson@example.com', '555-0108', ''),
    new Monitor(9, 'Daniel Taylor', 'daniel.taylor@example.com', '555-0109', ''),
    new Monitor(10, 'Sophia Anderson', 'sophia.anderson@example.com', '555-0110', ''),

  ];

  constructor() { }

  getMonitors(): Monitor[] {
    return this.monitors;
  }

  searchMonitor(searchTerm: string): Monitor[] {
    if (!searchTerm.trim()) {
      return this.getMonitors();
    }
    const lowerCaseQuery = searchTerm.toLowerCase();
    return this.monitors.filter(monitor =>
      monitor.name.toLowerCase().includes(lowerCaseQuery) ||
      monitor.email.toLowerCase().includes(lowerCaseQuery) ||
      monitor.phone.includes(searchTerm)
    );
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