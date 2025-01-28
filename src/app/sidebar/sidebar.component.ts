import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Drawer} from "primeng/drawer";
import {BoardService} from "../../services/board.service";
import {Popover} from "primeng/popover";
import {NgClass} from "@angular/common";
import {ConfirmDialog} from "primeng/confirmdialog";
import Board from "../../models/board";
import {ConfirmationService} from "primeng/api";

@Component({
  selector: 'app-sidebar',
  imports: [
    Drawer,
    Popover,
    NgClass,
    ConfirmDialog
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() public displayDrawer: boolean = false;
  @Output() public displayDrawerChange = new EventEmitter<boolean>();

  constructor(public confirmationService: ConfirmationService, public boardService: BoardService) {
  }

  closeDrawer() {
    this.displayDrawerChange.emit(false);
  }

  confirmDelete(board: Board) {
    this.confirmationService.confirm({
      accept: () => {
        this.boardService.deleteBoard(board);
      }
    });
  }
}
