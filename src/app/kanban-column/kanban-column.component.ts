import {Component, EventEmitter, Input, Output} from '@angular/core';
import {KanbanCardComponent} from "../kanban-card/kanban-card.component";
import {KanbanPlaceholderComponent} from "../kanban-placeholder/kanban-placeholder.component";
import KanbanColumn from "../../models/kanban-column";

@Component({
  selector: 'app-kanban-column',
  imports: [
    KanbanCardComponent,
    KanbanPlaceholderComponent
  ],
  templateUrl: './kanban-column.component.html',
  styleUrl: './kanban-column.component.scss'
})
export class KanbanColumnComponent {
  @Input () column!: KanbanColumn;
  @Output() cardAdded = new EventEmitter<void>();

  handleAddCard() {
    this.cardAdded.emit();
  }
}
