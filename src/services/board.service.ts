import {Injectable, signal} from '@angular/core';
import Board from "../models/board";
import {v4 as uuidv4} from "uuid";

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  public currentBoard = signal<Board | null>(null)
  public boards = signal<Board[]>([
    {
      id: uuidv4(),
      label: 'Getting Things Done',
      url: '/getting-things-done',
      color: '#7AC555'
    }
  ])
  constructor() {
    if(this.currentBoard() === null) {
      this.currentBoard.update(() => this.boards()[0])
    }
  }

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
  selectCurrentBoard(id: string) {
    this.currentBoard.update(() => this.boards().find(b => b.id === id) || null)
  }
}
