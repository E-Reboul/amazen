import { Component, Input } from '@angular/core';
import { HighlightDirective } from '../../directives/highlightDirective';
import { UserService } from '../../services/userService';
import { Article } from '../../interfaces/article';
import { BasketService } from '../../services/basketService';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [HighlightDirective],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss'
})
export class ArticleCardComponent {
  @Input() article!: Article;
  
  constructor(private userService: UserService, private basketService: BasketService) {}

  addArticleToPanier() {
    const userConnected = this.userService.getConnectedUser();
    if (!userConnected) {
      console.error("No user connected");
      return;
    }
    this.basketService.addArticleToPanier(this.article);
  }
}
