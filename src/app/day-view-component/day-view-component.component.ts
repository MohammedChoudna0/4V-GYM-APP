// day-view-component.component.ts
import { Component, OnInit } from '@angular/core';
import { TimeslotComponent } from '../timeslot/timeslot.component';
import { CommonModule } from '@angular/common';
import { Activity } from '../model/activityModel';
import { ActivityService } from '../services/activity.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-day-view-component',
  standalone: true,
  imports: [CommonModule, TimeslotComponent],
  templateUrl: './day-view-component.component.html',
  styleUrl: './day-view-component.component.scss'
})
export class DayViewComponentComponent implements OnInit {
  date: Date = new Date();

  activities: Activity[] = [];
  morningActivity: Activity | null;
  afternoonActivity: Activity | null;
  eveningActivity: Activity | null;
  
  private _date = new BehaviorSubject<Date>(new Date());
  date$ = this._date.asObservable();

  constructor(private activityService: ActivityService) { 
    this.morningActivity = null;
    this.afternoonActivity = null;
    this.eveningActivity = null;
  }

  ngOnInit() {
    this.activityService.currentDate.subscribe(date => {
      this.date = date;
      this._date.next(date);
      this.resetSlots();
      this.activities = this.activityService.getActivitiesForDate(this._date.getValue());
      this.assignActivitiesToTimeSlots()

    });
    
    this.activityService.getActivities().subscribe(activities => {
      this.activities = this.activityService.getActivitiesForDate(this._date.getValue());
      this.assignActivitiesToTimeSlots();
    });
    

    this.date$.subscribe(date => {
      this.activities = this.activityService.getActivitiesForDate(date);
      this.assignActivitiesToTimeSlots();
    });
  }
  assignActivitiesToTimeSlots(): void {
    this.activities.forEach(element => {
      if (element.timeSlot === "10:00-11:30") {
        this.morningActivity = element;
      } else if (element.timeSlot === "13:30-15:00") {
        this.afternoonActivity = element;
      } else if (element.timeSlot === "17:30-19:00") {
        this.eveningActivity = element;
      }
    });
  }
  
  resetSlots():void {
    this.morningActivity = null;
    this.afternoonActivity = null;
    this.eveningActivity = null;
  }
  previousDate(): void {
    this.resetSlots();
    const newDate = new Date(this._date.getValue());
    newDate.setDate(newDate.getDate() - 1);
    this._date.next(newDate);
    this.activities = this.activityService.getActivitiesForDate(newDate);
    this.assignActivitiesToTimeSlots();

  }
  
  nextDate(): void {
    this.resetSlots();
    const newDate = new Date(this._date.getValue());
    newDate.setDate(newDate.getDate() + 1);
    this._date.next(newDate);
    this.activities = this.activityService.getActivitiesForDate(newDate);
    this.assignActivitiesToTimeSlots();

  }
}
