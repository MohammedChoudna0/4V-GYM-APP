import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayViewComponentComponent } from '../day-view-component/day-view-component.component';



@Component({
  selector: 'activities',
  standalone: true,
  imports: [CommonModule, DayViewComponentComponent],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.scss'
})
export class ActivitiesComponent {

}
