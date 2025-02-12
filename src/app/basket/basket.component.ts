import { Component, OnInit, effect, inject } from '@angular/core';
import { ArticleCardComponent } from '../article-card/article-card.component';
import { Article } from '../../interfaces/article';
import { CommonModule } from '@angular/common';
import { BasketService } from '../../services/basketService';
import { UserService } from '../../services/userService';
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

  constructor(private basketService: BasketService, private userService: UserService) {}

  ngOnInit() {
    this.connectedUser = this.userService.getConnectedUser();
    console.log("Connected user:", this.connectedUser);

    const userPanier = this.basketService.getPanierOfConnectedUser();
    console.log("User panier:", userPanier);
    if (userPanier) {
      this.basketService.getPanierSignal().set([...userPanier.content]);
    }
  }
}