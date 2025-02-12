import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
    providedIn: 'root'
})

export class ArticleService {
    private articles: Article[] = [
        {
          name: 'Article 1',
          price: 5,
        },
        {
          name: 'Article 2',
          price: 8,
        },
        {
          name: 'Article 3',
          price: 2,
        },
        {
          name: 'Article 4',
          price: 9,
        },
        {
          name: 'Article 5',
          price: 2,
        },
        {
          name: 'Article 6',
          price: 1,
        },
        {
          name: 'Article 7',
          price: 7,
        }
      ];

    public getArticles() {
        return this.articles;
    }

    public addArticle(article: any) {
        this.articles.push(article);
    }

    public deleteRandomArticle() {
      this.articles.splice(Math.floor(Math.random() * this.articles.length), 1);
    }
}