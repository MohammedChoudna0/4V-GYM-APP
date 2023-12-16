import { Component } from '@angular/core';
import { TimeslotComponent } from '../timeslot/timeslot.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-day-view-component',
  standalone: true,
  imports: [CommonModule, TimeslotComponent],
  templateUrl: './day-view-component.component.html',
  styleUrl: './day-view-component.component.scss'
})
export class DayViewComponentComponent {

}
