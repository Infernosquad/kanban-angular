import { Component } from '@angular/core';
import {Card} from "primeng/card";
import {Panel} from "primeng/panel";
import {Button} from "primeng/button";

@Component({
  selector: 'app-kanban-column',
  imports: [
    Card,
    Panel,
    Button
  ],
  templateUrl: './kanban-column.component.html',
  styleUrl: './kanban-column.component.scss'
})
export class KanbanColumnComponent {

}
