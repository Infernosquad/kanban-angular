import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Button} from "primeng/button";
import {Toolbar} from "primeng/toolbar";
import {Avatar} from "primeng/avatar";
import {Panel} from "primeng/panel";
import {Card} from "primeng/card";
import {KanbanColumnComponent} from "./kanban-column/kanban-column.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button, Toolbar, Avatar, Panel, Card, KanbanColumnComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kanban-angular';
}
