import {Component, input} from '@angular/core';
import {Card} from "primeng/card";
import KanbanCard from '../../models/kanban-card';
import {CdkDrag, CdkDragPlaceholder} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-kanban-card',
  imports: [
    Card,
    CdkDrag,
    CdkDragPlaceholder
  ],
  templateUrl: './kanban-card.component.html',
  styleUrl: './kanban-card.component.scss'
})
export class KanbanCardComponent {
  card = input<KanbanCard>()

}
