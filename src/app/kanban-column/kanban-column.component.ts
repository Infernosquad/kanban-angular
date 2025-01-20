import {Component, EventEmitter, Input, Output} from '@angular/core';
import {KanbanCardComponent} from "../kanban-card/kanban-card.component";
import {KanbanPlaceholderComponent} from "../kanban-placeholder/kanban-placeholder.component";
import KanbanColumn from "../../models/kanban-column";
import {CdkDrag, CdkDragPlaceholder} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-kanban-column',
  imports: [
    KanbanCardComponent,
    KanbanPlaceholderComponent,
    CdkDrag
  ],
  templateUrl: './kanban-column.component.html',
  styleUrl: './kanban-column.component.scss'
})
export class KanbanColumnComponent {
  @Input () column: KanbanColumn | undefined;
  @Output() cardAdded = new EventEmitter<void>();
  @Output() columnAdded = new EventEmitter<void>();

  handleAddCard() {
    this.cardAdded.emit();
  }
  handleAddColumn() {
    this.columnAdded.emit();
  }
}
