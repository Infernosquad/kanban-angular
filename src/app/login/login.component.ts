import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Button} from "primeng/button";
import {FormsModule} from "@angular/forms";
import {Dialog} from "primeng/dialog";

@Component({
  selector: 'app-login',
  imports: [
    Button,
    FormsModule,
    Dialog
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @Input() displayLogin: boolean = true;
  @Output() displayLoginChange = new EventEmitter<boolean>();
  username: string = '';
  password: string = '';

  hideLogin() {
    this.displayLoginChange.emit(false);
  }

  login() {
    // Implement login logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}
