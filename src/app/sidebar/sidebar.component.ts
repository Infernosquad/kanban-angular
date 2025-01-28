import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Button} from "primeng/button";
import {Drawer} from "primeng/drawer";
import {PanelMenu} from "primeng/panelmenu";
import {Ripple} from "primeng/ripple";
import {BoardService} from "../../services/board.service";
import {Popover} from "primeng/popover";
import {Menu} from "primeng/menu";

@Component({
  selector: 'app-sidebar',
  imports: [
    Button,
    Drawer,
    PanelMenu,
    Ripple,
    Popover,
    Menu
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() public displayDrawer: boolean = false;
  @Output() public displayDrawerChange = new EventEmitter<boolean>();

  closeDrawer() {
    this.displayDrawerChange.emit(false);
  }

  constructor(public boardService: BoardService) {
  }
}
