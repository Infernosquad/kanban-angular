import { Component, EventEmitter, Output } from '@angular/core';
import { Button } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { Dialog } from 'primeng/dialog';

@Component({
  selector: 'app-signup',
  imports: [
    Button,
    FormsModule,
    Dialog
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  displaySignup: boolean = true;
  username: string = '';
  password: string = '';
  email: string = '';

  @Output() displaySignupChange = new EventEmitter<boolean>();

  hideSignup() {
    this.displaySignupChange.emit(false);
  }

  signup() {
    // Implement signup logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    console.log('Email:', this.email);
  }
}
