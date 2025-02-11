import { Injectable } from "@angular/core";
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

    public getPanier(idUser: number): Article[] {

        return this.findUserById(idUser).panier;
    }

    public login(email: string, password: string): boolean {
        let user = this.findUserByEmail(email);

        if (user.password !== password) {
            console.error("Password not found");
            return user.isConnected === false;
        }
            console.log(`${user.name} found`);
            return user.isConnected = true;
    }
}
