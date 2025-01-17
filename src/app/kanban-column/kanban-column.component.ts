import { Component } from '@angular/core';
import {KanbanCardComponent} from "../kanban-card/kanban-card.component";
import {KanbanPlaceholderComponent} from "../kanban-placeholder/kanban-placeholder.component";

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

}
