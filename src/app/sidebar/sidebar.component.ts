import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Drawer} from "primeng/drawer";
import {BoardService} from "../../services/board.service";
import {Popover} from "primeng/popover";
import {NgClass} from "@angular/common";
import {ConfirmDialog} from "primeng/confirmdialog";
import Board from "../../models/board";
import {ConfirmationService} from "primeng/api";
import {Dialog} from "primeng/dialog";
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {InputText} from "primeng/inputtext";
import {Button} from "primeng/button";

@Component({
  selector: 'app-sidebar',
  imports: [
    Drawer,
    Popover,
    NgClass,
    ConfirmDialog,
    Dialog,
    ReactiveFormsModule,
    InputText,
    Button
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() public displayDrawer: boolean = false;
  @Output() public displayDrawerChange = new EventEmitter<boolean>();

  public visibleEditBoardDialog: boolean = false;
  public editBoard: Board | undefined = undefined;

  boardForm = new FormGroup({
    label: new FormControl(''),
    url: new FormControl(''),
    color: new FormControl(''),
  });

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

  openEditBoard(item: Board) {
    this.visibleEditBoardDialog = true;
    this.editBoard = item;
    this.boardForm.patchValue({
      label: item.label,
      url: item.url,
      color: item.color
    });
  }

  saveBoard() {
    if (this.editBoard) {
      this.boardService.updateBoard(this.editBoard, this.boardForm.value);
    }

    this.visibleEditBoardDialog = false;
  }
}
