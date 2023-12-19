import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-monitor-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './monitor-card.component.html',
  styleUrl: './monitor-card.component.scss'
})
export class MonitorCardComponent {
  @Input() monitor!: { id: number; name: string; email: string; phone: string};
  @Output() deleteRequest = new EventEmitter<number>();
  @Output() editRequest = new EventEmitter<number>();


  eliminar(): void {
    if (confirm('¿Estás seguro de que quieres eliminar este monitor?')) {
      this.deleteRequest.emit(this.monitor.id);
    }
  }

  editar(): void {
    this.editRequest.emit(this.monitor.id);
  }
}


