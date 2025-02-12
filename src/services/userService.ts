import { Injectable, signal } from "@angular/core";
import { User } from "../interfaces/user";
import { Article } from "../interfaces/article";

@Injectable({
    providedIn: 'root',
})

export class UserService {

    private users: User[] = [
        {
            id: 0,
            name: 'John',
            password: 'password',
            email: 'John@gmail.com',
            role: 'admin',
            isConnected: false,
        },
        {
            id: 1,
            name: 'Jane',
            password: 'password',
            email: 'Jane@gmail.com',
            role: 'user',
            isConnected: false,
        },
    ];

    // private basketService: BasketService;

    constructor() {}

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
