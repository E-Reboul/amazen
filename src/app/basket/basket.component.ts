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
    effect(() => {
      this.panier = this.userService.getPanierSignal()();
    });
  }

  ngOnInit() {
    this.connectedUser = this.userService.getConnectedUser();
  }
}
