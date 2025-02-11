import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Article } from '../../interfaces/article';
import { ArticleService } from '../../services/articleService';

@Component({
  selector: 'app-form-article',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-article.component.html',
  styleUrl: './form-article.component.scss'
})

export class FormArticleComponent {

  articles: Article[] = [];
  oldArticlesLenght: number = 0;
  newName: string = '';
  newPrice: number = 0;

  constructor(private articleService: ArticleService) {
    this.articles = this.articleService.getArticles();
    this.oldArticlesLenght = this.articles.length;
  }

  onSubmit(form: NgForm){

    if (form.invalid) {
      console.log('Le formulaire est invalide');
    }

    const newArticle: Article = {
      name: form.value.name,
      price: form.value.price,
    };

    this.articleService.addArticle(newArticle);

    if (this.articles.length > this.oldArticlesLenght) {
      console.log('Un article à été ajouté à la liste : \n\n' + form.value);
    }

    form.reset();
  }
}
