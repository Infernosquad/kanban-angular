import {Component, input} from '@angular/core';
import {Card} from "primeng/card";
import KanbanCard from '../../models/kanban-card';
import {CdkDragPlaceholder} from "@angular/cdk/drag-drop";
import {KanbanService} from "../kanban.service";

@Component({
  selector: 'app-kanban-card',
  imports: [
    Card,
    CdkDragPlaceholder,
  ],
  templateUrl: './kanban-card.component.html',
  styleUrl: './kanban-card.component.scss'
})
export class KanbanCardComponent {
  card = input<KanbanCard>()
  constructor(public kanbanService: KanbanService) {
  }


  openModal() {
      this.kanbanService.setCurrentCard(this.card()!)
  }
}
