import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Button} from "primeng/button";
import {Toolbar} from "primeng/toolbar";
import {KanbanColumnComponent} from "./kanban-column/kanban-column.component";
import KanbanColumn from '../models/kanban-column';
import {v4 as uuidv4} from 'uuid';
import KanbanCard from "../models/kanban-card";
import {CdkDragDrop, CdkDropList, CdkDropListGroup, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

function generateCards(): KanbanCard[] {
  return [
    {
      id: uuidv4(),
      index: 0,
      title: 'Card 1 ....'
    },
    {
      id: uuidv4(),
      index: 1,
      title: 'Card 2 ....'
    },
    {
      id: uuidv4(),
      index: 2,
      title: 'Card 3 ....'
    },
    {
      id: uuidv4(),
      index: 3,
      title: 'Card 4 ....'
    },
  ]
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button, Toolbar, KanbanColumnComponent, CdkDropListGroup, CdkDropList],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kanban-angular';


  columns: KanbanColumn[] = [
    {
      id: uuidv4(),
      title: 'To Do',
      cards: generateCards(),
    },
    {
      id: uuidv4(),
      title: 'In Progress',
      cards: generateCards()
    },
    {
      id: uuidv4(),
      title: 'Done',
      cards: generateCards()
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

  drop(event: CdkDragDrop<KanbanColumn>) {
    if (event.previousContainer === event.container) {
      moveItemInArray<KanbanCard>(event.container.data.cards, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem<KanbanCard>(
        event.previousContainer.data.cards,
        event.container.data.cards,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
