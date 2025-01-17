import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Button} from "primeng/button";
import {Toolbar} from "primeng/toolbar";
import {KanbanColumnComponent} from "./kanban-column/kanban-column.component";
import {KanbanPlaceholderComponent} from "./kanban-placeholder/kanban-placeholder.component";
import KanbanColumn from '../models/kanban-column';
import KanbanCard from "../models/kanban-card";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button, Toolbar, KanbanColumnComponent, KanbanPlaceholderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kanban-angular';

  cards: KanbanCard[] = [
    {
      id: '',
      title: 'Lorem ipsum ....'
    },
    {
      id: '',
      title: 'Lorem ipsum ....'
    },
    {
      id: '',
      title: 'Lorem ipsum ....'
    },
    {
      id: '',
      title: 'Lorem ipsum ....'
    },
  ]

  columns: KanbanColumn[] = [
    {
      id: '',
      title: 'To Do',
      cards: this.cards,
    },
    {
      id: '',
      title: 'In Progress',
      cards: this.cards,
    },
    {
      id: '',
      title: 'Done',
      cards: this.cards
    },
  ]
}
