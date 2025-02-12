import { Article } from "./article";

export interface Basket {
    id: number,
    content: Article[],
    id_user: number,
}