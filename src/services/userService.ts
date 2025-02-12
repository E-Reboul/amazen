import { Injectable, signal } from "@angular/core";
import { User } from "../interfaces/user";
import { Article } from "../interfaces/article";

@Injectable({
    providedIn: 'root',
})

export class UserService {

    private users: User[] = [
        {
            id: 1,
            name: 'John',
            password: 'password',
            email: 'John@gmail.com',
            role: 'admin',
            panier: [],
        },
        {
            id: 2,
            name: 'Jane',
            password: 'password',
            email: 'Jane@gmail.com',
            role: 'user',
            panier: [],
        },
    ];

    private connectedUser = signal<User | null>(null);
    private panierSignal = signal<Article[]>([]);

    public getUsers() {

        return this.users;
    }

    public findUserById(id: number): User {
        let user = this.users.find(user => user.id === id);

        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }

    public findUserByEmail(email: string): User {
        let user = this.users.find(user => user.email === email);

        if (!user) {
            throw new Error('Email not found');
        }

        return user;
    }

    public getPanierById(idUser: number): Article[] {
        return this.findUserById(idUser).panier;
    }

    public addArticleToPanier(idUser: number, article: Article) {
        const user = this.findUserById(idUser);
        user.panier.push(article);
        this.panierSignal.set([...user.panier]);
    }

    public getPanierSignal() {
        return this.panierSignal;
    }
    
    public login(email: string, password: string): boolean {
        
        let user = this.findUserByEmail(email);

        if (user.password !== password) {
            console.error("Password not found");
            return false;
        }
            console.log(`${user.name} found`);
            this.disconnectUser();
            this.connectedUser.set(user);
            return true
    }

    public disconnectUser() {
        this.connectedUser.set(null);
    }

    public getConnectedUser(): User | null {
        let user = this.connectedUser();

        if (!user) {
            return null;
        }

        return user;
    }

    public userIsConnected(): boolean {
        let user = this.getConnectedUser();

        if (!user) {
            return false;
        }

        return true;
    }
}
