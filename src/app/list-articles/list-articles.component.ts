import { Component, Input } from '@angular/core';
import { ArticleCardComponent } from '../article-card/article-card.component';
import { NgFor } from '@angular/common';
import { ArticleService } from '../../services/articleService';
import { Article } from '../../interfaces/article';

@Component({
  selector: 'app-list-articles',
  standalone: true,
  imports: [ArticleCardComponent, NgFor],
  templateUrl: './list-articles.component.html',
  styleUrl: './list-articles.component.scss'
})

export class ListArticlesComponent {
  
    articles: Article[] = [];

    constructor(private articleService: ArticleService) {

      this.articles = this.articleService.getArticles();
    }

    onClick() {
      this.articleService.deleteRandomArticle();
    }

}
