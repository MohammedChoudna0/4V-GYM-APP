import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Activity } from '../model/activityModel';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private activityTypes: ActivityType[] = [
    new ActivityType('Actividad 1', 3),
    new ActivityType('Actividad 2', 2),
    new ActivityType('Actividad 3', 1),
    new ActivityType('Actividad 4', 4),
  ];

  private dateSource = new BehaviorSubject(new Date());
  currentDate = this.dateSource.asObservable();
  
  changeDate(date: Date) {
    this.dateSource.next(date);
  }

  getActivityTypes(): ActivityType[] {
    return [...this.activityTypes];
  }

  private _activities: BehaviorSubject<Activity[]> = new BehaviorSubject<Activity[]>([
    {
      activity_date: new Date(2023, 11, 25),
      monitors: ['Monitor 1', 'Monitor 2','Mikel'],
      type: 'spinning',
      timeSlot: '10:00-11:30',
      id: BigInt(1)
    },
    {
      activity_date: new Date(2023, 11, 26),
      monitors: ['Monitor 3' , 'John Cena '],
      type: 'pilates',
      timeSlot: '13:30-15:00',
      id: BigInt(2)
    },
    {
      activity_date: new Date(2023, 11, 27),
      monitors: ['Monitor 4', 'Monitor 5'],
      type: 'Spinning',
      timeSlot: '17:30-19:00',
      id: BigInt(3)
    },
    {
      activity_date: new Date(2023, 11, 27),
      monitors: ['Monitor 4', 'Monitor 5'],
      type: 'Spinning',
      timeSlot: '10:00-11:30',
      id: BigInt(4)
    },
    {
      activity_date: new Date(2023, 11, 27),
      monitors: ['Monitor 6', 'Monitor 7'],
      type: 'Yoga',
      timeSlot: '13:30-15:00',
      id: BigInt(5)
    }  ]);

  constructor() { }

  getActivities(): Observable<Activity[]> {
    return this._activities.asObservable();
  }

  getActivity(id: BigInt): Activity | undefined {
    const activities = this._activities.getValue();
    return activities.find(activity => activity.id === id);
  }

  getActivitiesForDate(date: Date): Activity[] {
    const activities = this._activities.getValue();
    return activities.filter(activity => {
      return activity.activity_date.getDate() === date.getDate() &&
            activity.activity_date.getMonth() === date.getMonth() &&
            activity.activity_date.getFullYear() === date.getFullYear();
    });
  }

  addActivity(activity: Activity): void {
    const activities = this._activities.getValue();
    activities.push(activity);
    this._activities.next(activities);
  }

  deleteActivity(id: BigInt): void {
    const activities = this._activities.getValue();
    const index = activities.findIndex(activity => activity.id === id);
    if (index !== -1) {
      activities.splice(index, 1);
      this._activities.next(activities);
      console.log(activities.length);
    }
  }

  updateActivity(updatedActivity: Activity): void {
    const activities = this._activities.getValue();
    const index = activities.findIndex(activity => activity.id === updatedActivity.id);
    if (index !== -1) {
      activities[index] = updatedActivity;
      this._activities.next(activities);
    }
  }
}

// activity-type.ts

export class ActivityType {
  constructor(
    public name: string,
    public numberOfMonitors: number
  ) {}
}
