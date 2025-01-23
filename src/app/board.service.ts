import {Injectable, signal} from '@angular/core';
import Board from "../models/board";
import {v4 as uuidv4} from "uuid";

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  public boards = signal<Board[]>([
    {
      id: uuidv4(),
      label: 'Getting Things Done',
      url: '/getting-things-done'
    }
  ])
  constructor() { }

  addBoard() {
    this.boards.update(boards => [
      ...boards,
      {
        id: uuidv4(),
        label: 'New Board',
        url: '/new-board'
      }
    ])
  }

  deleteBoard(board: Board) {
    this.boards.update(boards => boards.filter(b => b.id !== board.id))
  }
}
