import { Injectable } from '@angular/core';
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
  
  getActivityTypes(): ActivityType[] {
    return [...this.activityTypes];
  }

  private activities: Activity[] = [
    {
      activity_date: new Date(2023, 11, 25),
      place: 'Madrid',
      monitors: ['Monitor 1', 'Monitor 2','Mikel'],
      type: 'spinning',
      id: BigInt(1)
    },
    {
      activity_date: new Date(2023, 11, 26),
      place: 'Barcelona',
      monitors: ['Monitor 3' , 'John Cena '],
      type: 'pilates',
      id: BigInt(2)
    },
    {
      activity_date: new Date(2023, 11, 27),
      place: 'Valencia',
      monitors: ['Monitor 4', 'Monitor 5'],
      type: 'Spinning',
      id: BigInt(3)
    }
  ];
  constructor() { }
    // Método para obtener todas las actividades
    getActivities(): Activity[] {
      return [...this.activities];
    }
  
    // Método para obtener una actividad por su id
    getActivity(id: BigInt): Activity | undefined {
      return this.activities.find(activity => activity.id === id);
    }
}
// activity-type.ts

export class ActivityType {
  constructor(
    public name: string,
    public numberOfMonitors: number
  ) {}
}
