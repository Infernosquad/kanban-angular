import {Pipe, PipeTransform} from '@angular/core';
import KanbanColumn from "../models/kanban-column";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value: KanbanColumn[], query: string): KanbanColumn[] {
    if (query.length > 0) {
      return value.map(column => {
        const cards = column.cards.filter(card => card.title.toLowerCase().includes(query))

        return {...column, cards}
      })
    }

    return value
  }
}
