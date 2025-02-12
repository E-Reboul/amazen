import { Component } from '@angular/core';
import { ListArticlesComponent } from '../list-articles/list-articles.component';
import { FormArticleComponent } from '../form-article/form-article.component';
import { BasketComponent } from '../basket/basket.component';
import { FormLoginComponent } from "../form-login/form-login.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-home',
  imports: [ListArticlesComponent, FormArticleComponent, NavbarComponent, BasketComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {}
