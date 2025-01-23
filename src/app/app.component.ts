import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Button} from "primeng/button";
import {Toolbar} from "primeng/toolbar";
import {KanbanColumnComponent} from "./kanban-column/kanban-column.component";
import KanbanColumn from '../models/kanban-column';
import KanbanCard from "../models/kanban-card";
import {CdkDragDrop, CdkDropList, CdkDropListGroup, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {KanbanCardModalComponent} from "./kanban-card-modal/kanban-card-modal.component";
import {KanbanService} from "./kanban.service";
import {InputGroup} from "primeng/inputgroup";
import {InputGroupAddon} from "primeng/inputgroupaddon";
import {FormsModule} from "@angular/forms";
import {InputText} from "primeng/inputtext";
import {IconField} from "primeng/iconfield";
import {InputIcon} from "primeng/inputicon";
import {Avatar} from "primeng/avatar";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button, Toolbar, KanbanColumnComponent, CdkDropListGroup, CdkDropList, KanbanCardModalComponent, InputGroup, InputGroupAddon, FormsModule, InputText, IconField, InputIcon, Avatar],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kanban-angular';
  searchQuery = '';

  constructor(public kanbanService: KanbanService) {
  }


  handleAddColumn() {
    this.kanbanService.addColumn()
  }
  handleAddCard(column: KanbanColumn) {
    this.kanbanService.addCard(column)
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
