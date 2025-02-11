import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../../services/userService';
import { login } from '../../interfaces/login';

@Component({
  selector: 'app-form-login',
  imports: [FormsModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.scss'
})

export class FormLoginComponent {
  
  constructor(private userService: UserService) {}

  onSubmit(loginForm: NgForm) {
    if (loginForm.invalid) {
      console.error("Fields is invalid");
    }

    const fields: login = {
      email: loginForm.value.email,
      password: loginForm.value.password,
    }

    this.userService.login(fields.email, fields.password);
    
    loginForm.reset();
  }
}
