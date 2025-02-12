import { Component, OnInit, effect } from '@angular/core';
import { ArticleCardComponent } from '../article-card/article-card.component';
import { Article } from '../../interfaces/article';
import { UserService } from '../../services/userService';
import { CommonModule } from '@angular/common';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [ArticleCardComponent, CommonModule],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss'
})
export class BasketComponent implements OnInit {
  connectedUser: User | null = null;
  panier: Article[] = [];
  
  constructor(private userService: UserService) {
    // Création d'un effect pour mettre à jour automatiquement le panier
    effect(() => {
      const panierSignal = this.userService.getPanierSignal()();
      if (panierSignal) {
        this.panier = panierSignal;
      }
    });
  }

  ngOnInit() {
    this.connectedUser = this.userService.getConnectedUser();
    this.updatePanier();
  }

  updatePanier() {
    if (!this.connectedUser) {
      console.error("No user connected");
      return;
    }
    this.panier = this.userService.getPanierById(this.connectedUser.id);
    console.log(`Panier de l'utilisateur : ${this.connectedUser.name} ${JSON.stringify(this.panier)}`);
  }
}
