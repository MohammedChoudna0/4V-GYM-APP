import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayViewComponentComponent } from '../day-view-component/day-view-component.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';
import { ActivityService } from '../services/activity.service';


@Component({
  selector: 'activities',
  standalone: true,
  imports: [CommonModule, DayViewComponentComponent, MatCardModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.scss'
})
export class ActivitiesComponent {
  selected: Date | null = null;
  constructor(private activityService: ActivityService) {}

  onDateChange(date: Date) {
    this.activityService.changeDate(date);
  }
}
