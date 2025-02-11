import { Component } from '@angular/core';
import { ListArticlesComponent } from '../list-articles/list-articles.component';
import { FormArticleComponent } from '../form-article/form-article.component';
import { BasketComponent } from '../basket/basket.component';
import { FormLoginComponent } from "../form-login/form-login.component";

@Component({
  selector: 'app-home',
  imports: [ListArticlesComponent, FormArticleComponent, FormLoginComponent, BasketComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  urlLogo = 'https://m.media-amazon.com/images/I/813kqvYoRfL.png';
}
