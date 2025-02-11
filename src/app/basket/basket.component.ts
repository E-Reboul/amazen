import { Component, OnInit } from '@angular/core';
import { ArticleCardComponent } from '../article-card/article-card.component';
import { Article } from '../../interfaces/article';
import { UserService } from '../../services/userService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [ArticleCardComponent, CommonModule],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss'
})
export class BasketComponent implements OnInit {
  panier: Article[] = [];
  
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.updatePanier();
  }

  updatePanier() {
    this.panier = this.userService.getPanierById(1);
  }
}
