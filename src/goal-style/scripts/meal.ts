import { Ingredient } from "./ingredient";

export class Meal {
    id: number;
    name: string;
    size: string;
    ingredients: Ingredient[];
}