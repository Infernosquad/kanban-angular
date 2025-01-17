import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Button} from "primeng/button";
import {Toolbar} from "primeng/toolbar";
import {KanbanColumnComponent} from "./kanban-column/kanban-column.component";
import {KanbanPlaceholderComponent} from "./kanban-placeholder/kanban-placeholder.component";
import KanbanColumn from '../models/kanban-column';
import {v4 as uuidv4} from 'uuid';
import KanbanCard from "../models/kanban-card";
import {KanbanCardComponent} from "./kanban-card/kanban-card.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button, Toolbar, KanbanColumnComponent, KanbanPlaceholderComponent, KanbanCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kanban-angular';

  cards: KanbanCard[] = [
    {
      id: uuidv4(),
      title: 'Lorem ipsum ....'
    },
    {
      id: uuidv4(),
      title: 'Lorem ipsum ....'
    },
    {
      id: uuidv4(),
      title: 'Lorem ipsum ....'
    },
    {
      id: uuidv4(),
      title: 'Lorem ipsum ....'
    },
  ]

  columns: KanbanColumn[] = [
    {
      id: uuidv4(),
      title: 'To Do',
      cards: [...this.cards],
    },
    {
      id: uuidv4(),
      title: 'In Progress dddddddddddd ddddddddddddddddddddd dddddddddddddddddddddddddddddddddddddddddddddd',
      cards: [...this.cards],
    },
    {
      id: uuidv4(),
      title: 'Done',
      cards: [...this.cards],
    },
  ]

  handleAddColumn() {
    this.columns.push({
      id: uuidv4(),
      title: 'New Column',
      cards: []
    })
  }
  handleAddCard(column: KanbanColumn) {
    this.columns = this.columns.map(c => {
      if (c.id === column.id) {
        column.cards.push({
          id: uuidv4(),
          title: 'New Card'
        })
        return column
      }
      return c
    });
  }
}
