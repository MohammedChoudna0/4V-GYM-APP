import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-add.component.html',
  styleUrl: './search-add.component.scss'
})
export class SearchAddComponent {
  isAddingMonitor: boolean = false;
showAddMonitorForm() {
  this.isAddingMonitor = true;
}
  @Output() search = new EventEmitter<string>();
  searchQuery: string = '';

  onSearchChange(): void {
    this.search.emit(this.searchQuery);
  }
}