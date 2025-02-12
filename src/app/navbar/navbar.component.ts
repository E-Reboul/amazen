import { Component } from '@angular/core';
import { FormLoginComponent } from "../form-login/form-login.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [FormLoginComponent, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  urlLogo = 'https://m.media-amazon.com/images/I/813kqvYoRfL.png';
}
