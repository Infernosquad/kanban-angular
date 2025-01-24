import { Component, Input } from '@angular/core';
import {Avatar} from "primeng/avatar";
import {IconField} from "primeng/iconfield";
import {InputIcon} from "primeng/inputicon";
import {InputText} from "primeng/inputtext";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Toolbar} from "primeng/toolbar";
import {KanbanService} from "../../services/kanban.service";
import {BoardService} from "../../services/board.service";

@Component({
  selector: 'app-header',
  imports: [
    Avatar,
    IconField,
    InputIcon,
    InputText,
    ReactiveFormsModule,
    Toolbar,
    FormsModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() public displayDrawer: boolean = false;
  public searchQuery: string = '';

  constructor(public kanbanService: KanbanService, public boardService: BoardService) {
  }
}
