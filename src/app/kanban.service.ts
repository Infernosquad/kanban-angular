import {Injectable, signal} from '@angular/core';
import KanbanCard from "../models/kanban-card";
import {v4 as uuidv4} from "uuid";
import KanbanColumn from "../models/kanban-column";

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

@Injectable({
  providedIn: 'root'
})
export class KanbanService {
  constructor() { }

  public currentCard = signal<KanbanCard | null>(null);
  public columns = signal<KanbanColumn[]>([
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
  ])

  addColumn() {
    const newColumn = {
      id: uuidv4(),
      title: 'New Column',
      cards: []
    }

    this.columns.update(current => [...current, newColumn]);
  }

  setCurrentCard(card: KanbanCard | null) {
    this.currentCard.update(() => card);
  }

  addCard(column: KanbanColumn) {
    const columns = this.columns().map(c => {
      if (c.id === column.id) {
        column.cards.push({
          id: uuidv4(),
          title: 'New Card'
        })
        return column
      }
      return c
    });

    this.columns.update(() => columns);
  }

  updateCard(card: KanbanCard, title: string) {
    const columns = this.columns().map(column => {
      column.cards = column.cards.map(c => {
        if (c.id === card.id) {
          c.title = title
        }
        return c
      })
      return column
    })

    this.columns.update(() => columns)
  }
}
