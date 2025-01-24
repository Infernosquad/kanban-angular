import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Button} from "primeng/button";
import {Toolbar} from "primeng/toolbar";
import {KanbanColumnComponent} from "../kanban-column/kanban-column.component";
import KanbanColumn from '../../models/kanban-column';
import KanbanCard from "../../models/kanban-card";
import {CdkDragDrop, CdkDropList, CdkDropListGroup, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {KanbanCardModalComponent} from "../kanban-card-modal/kanban-card-modal.component";
import {KanbanService} from "../../services/kanban.service";
import {InputGroup} from "primeng/inputgroup";
import {InputGroupAddon} from "primeng/inputgroupaddon";
import {FormsModule} from "@angular/forms";
import {InputText} from "primeng/inputtext";
import {IconField} from "primeng/iconfield";
import {InputIcon} from "primeng/inputicon";
import {Avatar} from "primeng/avatar";
import {Drawer} from "primeng/drawer";
import {Menu} from "primeng/menu";
import {MenuItem} from "primeng/api";
import {BoardService} from "../../services/board.service";
import {PanelMenu} from "primeng/panelmenu";
import {Badge} from "primeng/badge";
import {Ripple} from "primeng/ripple";
import {SidebarComponent} from "../sidebar/sidebar.component";
import {HeaderComponent} from "../header/header.component";
import {SearchPipe} from "../../pipes/search.pipe";
import {AvatarGroup} from "primeng/avatargroup";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toolbar, KanbanColumnComponent, CdkDropListGroup, CdkDropList, KanbanCardModalComponent, InputGroup, InputGroupAddon, FormsModule, InputText, IconField, InputIcon, Avatar, Drawer, Menu, PanelMenu, Badge, Ripple, SidebarComponent, HeaderComponent, SearchPipe, AvatarGroup],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kanban-angular';
  public displayDrawer = false;

  constructor(public kanbanService: KanbanService, public boardService: BoardService) {
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
