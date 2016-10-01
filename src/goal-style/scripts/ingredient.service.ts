import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from "@angular/http";

import "rxjs/add/operator/toPromise";

import { Ingredient } from "./ingredient";

@Injectable()
export class IngredientService {
    public ingredientAdded$: EventEmitter<Ingredient>;

    constructor(private http: Http) {
        this.ingredientAdded$ = new EventEmitter<Ingredient>();
    }

    private handleError(error: any): Promise<any> {
        console.log("An error occurred", error);
        return Promise.reject(error.message || error);
    }

    isAddingIngredient(ingredient: Ingredient): void {
        this.ingredientAdded$.emit(ingredient);
    }
}