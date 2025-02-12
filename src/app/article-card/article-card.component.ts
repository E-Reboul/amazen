import { Component, Input } from '@angular/core';
import { HighlightDirective } from '../../directives/highlightDirective';
import { UserService } from '../../services/userService';
import { Article } from '../../interfaces/article';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [HighlightDirective],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss'
})
export class ArticleCardComponent {
  @Input() article!: Article;
  
  constructor(private userService: UserService) {}

  addArticleToPanier() {
    const userConnected = this.userService.getConnectedUser();
    if (!userConnected) {
      console.error("No user connected");
      return;
    }
    this.userService.addArticleToPanier(userConnected.id, this.article);

    console.log(`Article ajouté pour l'utilisateur : ${userConnected.name} ${JSON.stringify(this.userService.getPanierById(userConnected.id))}`);
  }
}
