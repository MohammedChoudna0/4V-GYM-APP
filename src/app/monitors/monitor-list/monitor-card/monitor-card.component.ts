import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-monitor-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './monitor-card.component.html',
  styleUrl: './monitor-card.component.scss'
})
export class MonitorCardComponent {
  @Input() monitor!: { name: string; email: string; phone: string};
}
