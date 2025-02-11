import { Article } from "./article";

export interface User {
    id: number;
    name: string;
    password: string;
    email: string;
    role: string;
    panier: Article[];
}