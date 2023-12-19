import { Component, OnInit } from '@angular/core';
import { Monitor } from '../model/monitorModel';
import { MonitorService } from '../services/monitors.service';
import { SearchAddComponent } from './search-add/search-add.component';
import { MonitorListComponent } from './monitor-list/monitor-list.component';
import { FormsModule } from '@angular/forms';
import { MonitorCardComponent } from './monitor-list/monitor-card/monitor-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-monitors',
  standalone: true,
  imports: [SearchAddComponent, MonitorListComponent, FormsModule, MonitorCardComponent, CommonModule],
  templateUrl: './monitors.component.html',
  styleUrls: ['./monitors.component.scss']
})
export class MonitorsComponent implements OnInit {
  searchQuery: string = '';
  monitors: Monitor[] = [];
  filteredMonitors: Monitor[] = [];
  isAddingMonitor = false;
  selectedMonitor: Monitor | null = null;

  constructor(private monitorService: MonitorService) {}

  ngOnInit(): void {
    this.loadMonitors();
  }

  handleSearch(query: string): void {
    if (!query) {
      this.filteredMonitors = [...this.monitors];
    } else {
      this.filteredMonitors = this.monitors.filter(monitor =>
        monitor.name.toLowerCase().includes(query.toLowerCase()) ||
        monitor.email.toLowerCase().includes(query.toLowerCase()) ||
        monitor.phone.includes(query)
      );
    }
    // Si el filtro deja un solo monitor, podrías querer seleccionarlo automáticamente
    if (this.filteredMonitors.length === 1) {
      this.selectedMonitor = this.filteredMonitors[0];
    } else {
      this.selectedMonitor = null;
    }
  }

  loadMonitors(): void {
    this.monitors = this.monitorService.getMonitors();
    // Inicializa la lista filtrada con todos los monitores al cargar
    this.filteredMonitors = [...this.monitors];
  }

  showAddMonitorForm(): void {
    this.isAddingMonitor = true;
  }

  addMonitor(name: string, email: string, phone: string): void {
    // Asumiendo que el modelo Monitor tiene un campo id
    const newMonitor: Monitor = { id: this.monitors.length + 1, name, email, phone };
    this.monitorService.addMonitor(newMonitor);
    this.isAddingMonitor = false;
    this.loadMonitors();
  }
  cancelAddMonitor(): void {
    this.isAddingMonitor = false;
  }
}
