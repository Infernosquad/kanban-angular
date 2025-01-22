import {Component, effect} from '@angular/core';
import {Button} from "primeng/button";
import {Dialog} from "primeng/dialog";
import {Inplace} from "primeng/inplace";
import {InputGroup} from "primeng/inputgroup";
import {InputGroupAddon} from "primeng/inputgroupaddon";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {KanbanService} from "../kanban.service";
import {InputText} from "primeng/inputtext";
import {Editor} from "primeng/editor";

@Component({
  selector: 'app-kanban-card-modal',
  imports: [
    Button,
    Dialog,
    Inplace,
    InputGroup,
    InputGroupAddon,
    FormsModule,
    ReactiveFormsModule,
    InputText,
    Editor
  ],
  templateUrl: './kanban-card-modal.component.html',
  styleUrl: './kanban-card-modal.component.scss'
})
export class KanbanCardModalComponent {
  display = false

  title = new FormControl('');
  description = new FormControl('');

  constructor(public kanbanService: KanbanService) {
  }

  private displayEffect = effect(() => {
    const card = this.kanbanService.currentCard()
    if (card !== null) {
      this.display = true
      this.title.setValue(card.title)
    }
  });

  save() {
    const card = this.kanbanService.currentCard()
    if (card) {
      this.kanbanService.updateCard(card, this.title.value!)
    }
  }

  closeModal() {
    this.kanbanService.currentCard.set(null)
  }
}
