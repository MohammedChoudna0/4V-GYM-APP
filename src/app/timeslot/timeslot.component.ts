import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-timeslot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeslot.component.html',
  styleUrl: './timeslot.component.scss'
})
export class TimeslotComponent {
  @Input() startTime: string = '';
  @Input() endTime: string = '';
  @Input() isBooked: boolean = false;
  @Input() bookedBy: string[] = [];

  get slotColor(): string {
    return this.isBooked ? '#D9D9D9' : '#2B7D3D';
  }
}
