import { Injectable, signal } from '@angular/core';
import { UserService } from './userService';
import { Basket } from '../interfaces/basket';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  private baskets: Basket[] = [
    {
      id: 0,
      content: [],
      id_user: 0,
    },
    {
      id: 1,
      content: [],
      id_user: 1,
    },
  ];

  private userService: UserService = new UserService();

  private panierSignal = signal<Article[]>([]);

  constructor() {}

  public getPanierSignal() {
    return this.panierSignal;
  }

  public getPanierOfConnectedUser(): Basket | undefined {
    let connectedUser = this.userService.getConnectedUser();

    if (connectedUser !== null && connectedUser !== undefined) {
      let userId = this.userService.findUserById(connectedUser.id);
      let panier: Basket | undefined = this.baskets.find(
        (basket) => basket.id_user === userId.id
      );

      return panier;
    }

    return undefined;
  }

  public addArticleToPanier(article: Article) {
    let user = this.userService.getConnectedUser();
    let userPanier = this.getPanierOfConnectedUser();

    if (user) {
      this.panierSignal.set([...userPanier!.content]);
      userPanier?.content.push(article);
    }
  }
}
