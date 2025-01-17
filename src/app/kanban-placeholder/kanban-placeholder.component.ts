import {Component, input} from '@angular/core';

@Component({
  selector: 'app-kanban-placeholder',
  imports: [],
  templateUrl: './kanban-placeholder.component.html',
  styleUrl: './kanban-placeholder.component.scss'
})
export class KanbanPlaceholderComponent {
  title = input('');
}
