import { Component } from '@angular/core';
import { ListArticlesComponent } from '../list-articles/list-articles.component';
import { FormArticleComponent } from '../form-article/form-article.component';
import { BasketComponent } from '../basket/basket.component';
@Component({
  selector: 'app-home',
  imports: [ListArticlesComponent, FormArticleComponent, BasketComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  urlLogo = 'https://m.media-amazon.com/images/I/813kqvYoRfL.png';
}
