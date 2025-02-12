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
            isConnected: false,
        },
        {
            id: 2,
            name: 'Jane',
            password: 'password',
            email: 'Jane@gmail.com',
            role: 'user',
            panier: [],
            isConnected: false,
        },
    ];

    // private UserConnected: User | null = null;
    private panierSignal = signal<Article[]>([]);

    constructor() {
        const savedUser = localStorage.getItem('connectedUser');
        const savedPanier = localStorage.getItem('panier');
        if (savedUser) {
            const user = JSON.parse(savedUser);
            if (savedPanier) {
                const panier = JSON.parse(savedPanier);
                this.panierSignal.set(panier);
                this.findUserById(user.id).panier = panier;
            }
            this.users.find(u => u.id === user.id)!.isConnected = true;
        }
    }

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
        localStorage.setItem('panier', JSON.stringify(user.panier));
    }

    public getPanierSignal() {
        return this.panierSignal;
    }
    
    public login(email: string, password: string): boolean {
        
        this.disconnectAllUsers();

        let user = this.findUserByEmail(email);

        if (user.password !== password) {
            console.error("Password not found");
            user.isConnected = false;
            return false;
        }
            console.log(`${user.name} found`);
            user.isConnected = true;
            localStorage.setItem('connectedUser', JSON.stringify(user));
            return true
    }

    public disconnectAllUsers() {
        this.users.forEach(user => user.isConnected = false);
        localStorage.removeItem('connectedUser');
    }

    public getConnectedUser(): User | null {
        let user = this.users.find(user => user.isConnected === true);
        return user ?? null;
    }

    public userIsConnected(): boolean {
        let user = this.getConnectedUser();

        if (!user) {
            return false;
        }

        return true;
    }
}
