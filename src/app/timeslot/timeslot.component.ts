import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Activity } from '../model/activityModel';
import { FormsModule } from '@angular/forms';
import { Monitor } from '../model/monitorModel';
import { MonitorService } from '../services/monitors.service';
import { ActivityService } from '../services/activity.service';
import { ActivityType } from '../services/activity.service';
import { ChangeDetectorRef } from '@angular/core';
import { HostListener } from '@angular/core';



@Component({
  selector: 'app-timeslot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './timeslot.component.html',
  styleUrl: './timeslot.component.scss'
})
export class TimeslotComponent  {

  @Input() startTime: string = '';
  @Input() endTime: string = '';
  @Input() activity!: Activity | null;
  @Input() date: Date | null = null;

  monitors: Monitor[] = [];
  activityTypes: ActivityType[] = [];
  selectedActivity: ActivityType | null = null;
  selectedMonitors: string[] = [];
  selectedActivityType: string = '';
  editMode: boolean = false;
  isMobile = window.innerWidth < 768;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = event.target.innerWidth < 768;
  }
  
  onActivitySelected(event: any) {
    const selectedActivityName = event.target.value;
    this.selectedActivity = this.activityTypes.find(activityType => activityType.name === selectedActivityName) || null;
    this.selectedMonitors = Array(selectedActivityName.numberOfMonitors).fill(null);
  }
  get slotColor(): string {
    return this.activity ? '#D9D9D9' : '#2B7D3D';
  }
  constructor(private monitorService: MonitorService , private activityService: ActivityService, private cdr: ChangeDetectorRef) {
    this.monitors = this.monitorService.getMonitors();
    this.activityTypes = this.activityService.getActivityTypes();

  }
  showModal:boolean = false;
  closeModel:boolean = false;
  onAddClick() {
    this.openModal();
  }

  onEditClick() {
    if (this.activity) {
      this.editMode = true;
      this.selectedActivityType = this.activity.type;
      this.selectedMonitors = this.activity.monitors;
      this.openModal();
    }
  }
  hasDuplicateMonitors(): boolean {
    const uniqueMonitors = new Set(this.selectedMonitors);
    return uniqueMonitors.size !== this.selectedMonitors.length;
  }
  
  onDeleteClick() {
    if (this.activity && this.activity.id !== undefined) {
      this.activityService.deleteActivity(this.activity.id);
      alert('Actividad borrada!');
    }
  }
  
  onAceptarClick(): void {
    if (this.date) {
      const newActivity: Activity = {
        activity_date: this.date, 
        monitors: this.selectedMonitors,
        type: this.selectedActivityType,
        timeSlot: this.startTime + "-" + this.endTime  , 
        id: this.editMode && this.activity ? this.activity.id : BigInt(this.activityService.getNumberOfActivities() + 1) 
      };
      if (this.editMode) {
        this.activityService.updateActivity(newActivity);
      } else {
        this.activityService.addActivity(newActivity);
      }
      this.closeModal();
      this.editMode = false;
    } 
  }
  
  
  onCancelarClick() {
    this.closeModal();
    this.editMode = false;
  }
  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }
}