import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Activity } from '../model/activityModel';
import { FormsModule } from '@angular/forms';
import {  TemplateRef, ViewChild } from '@angular/core';



@Component({
  selector: 'app-timeslot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './timeslot.component.html',
  styleUrl: './timeslot.component.scss'
})
export class TimeslotComponent {

  @Input() startTime: string = '';
  @Input() endTime: string = '';
  @Input() activity!: Activity;

  tipoActividad: string = "";
  monitor1: string = "";
  selectedActivity: string = ''; // Para almacenar el tipo de actividad seleccionado

  get slotColor(): string {
    return this.activity ? '#D9D9D9' : '#2B7D3D';
  }
  constructor() {}
  showModal:boolean = false;
  closeModel:boolean = false;
  onAddClick() {
    this.openModal();
  }

  onEditClick() {
    alert('Editar clicado!');
  }

  onDeleteClick() {
    alert('Borrar clicado!');
  }
  onAceptarClick() {
    alert('Tipo de actividad: ' + this.tipoActividad);
    alert('Monitor 1: ' + this.monitor1);
    // Haz algo con los valores de los campos de formulario
  }
  onCancelarClick() {
    // Haz algo cuando se haga clic en "CANCELAR"
  }
  openModal(): void {
    this.showModal = true;
  }

  // Función para cerrar el modal
  closeModal(): void {
    this.showModal = false;
  }
} 
