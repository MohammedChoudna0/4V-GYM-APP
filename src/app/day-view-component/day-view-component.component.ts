import { Component, OnInit } from '@angular/core';
import { TimeslotComponent } from '../timeslot/timeslot.component';
import { CommonModule } from '@angular/common';
import { Activity } from '../model/activityModel';
import { ActivityService } from '../services/activity.service';

@Component({
  selector: 'app-day-view-component',
  standalone: true,
  imports: [CommonModule, TimeslotComponent],
  templateUrl: './day-view-component.component.html',
  styleUrl: './day-view-component.component.scss'
})
export class DayViewComponentComponent implements OnInit {
  activities: Activity[] = [];

  constructor(private activityService: ActivityService) { }

  ngOnInit() {
    this.activities = this.activityService.getActivities();
  }
}
