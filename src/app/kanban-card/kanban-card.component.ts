import {Component, input} from '@angular/core';
import {Card} from "primeng/card";
import KanbanCard from '../../models/kanban-card';

@Component({
  selector: 'app-kanban-card',
  imports: [
    Card
  ],
  templateUrl: './kanban-card.component.html',
  styleUrl: './kanban-card.component.scss'
})
export class KanbanCardComponent {
  card = input<KanbanCard>()

}
