import {Component, Input} from '@angular/core';
import {Button} from "primeng/button";
import {Drawer} from "primeng/drawer";
import {PanelMenu} from "primeng/panelmenu";
import {Ripple} from "primeng/ripple";
import {BoardService} from "../../services/board.service";

@Component({
  selector: 'app-sidebar',
  imports: [
    Button,
    Drawer,
    PanelMenu,
    Ripple
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() public displayDrawer: boolean = false;
  constructor(public boardService: BoardService) {
  }
}
