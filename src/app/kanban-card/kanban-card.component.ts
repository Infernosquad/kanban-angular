import { Component } from '@angular/core';
import {Card} from "primeng/card";

@Component({
  selector: 'app-kanban-card',
  imports: [
    Card
  ],
  templateUrl: './kanban-card.component.html',
  styleUrl: './kanban-card.component.scss'
})
export class KanbanCardComponent {

}
