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

    loadMonitors(): void {
      this.monitors = this.monitorService.getMonitors();
      this.filteredMonitors = [...this.monitors];
    }

    showAddMonitorForm(): void {
      this.isAddingMonitor = true;
    }

    addMonitor(name: string, email: string, phone: string): void {
      // Asumiendo que el modelo Monitor tiene un campo id
      const newMonitor: Monitor = { id: this.monitors.length + 1, name, email, phone, imageUrl: '' };
      this.monitorService.addMonitor(newMonitor);
      this.isAddingMonitor = false;
      this.loadMonitors();
    }
    cancelAddMonitor(): void {
      this.isAddingMonitor = false;
    }

    searchMonitors(searchTerm: string): void {
      this.searchQuery = searchTerm;
      this.applyFilter();
    }

    applyFilter(): void {
      if (this.searchQuery) {
        this.filteredMonitors = this.monitors.filter(monitor =>
          monitor.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      } else {
        this.filteredMonitors = [...this.monitors];
      }
    }
  }