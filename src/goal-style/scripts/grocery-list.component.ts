import { Component, OnInit, Input } from "@angular/core";

import { GroceryList } from "./grocery-list";

import { GroceryListService } from "./grocery-list.service";

import { IngredientService } from "./ingredient.service";

import { Ingredient } from "./ingredient";

@Component({
    selector: "grocery-list",
    templateUrl: "html-components/grocery-components/grocery-list.component.html"
})

export class GroceryListComponent implements OnInit {
    title = "Grocery List";
    @Input() groceryList: GroceryList;

    constructor(
        private ingredientService: IngredientService,
        private groceryListService: GroceryListService
    ) {
        ingredientService.ingredientAdded$.subscribe(ingredient => this.updateGroceryList(ingredient));
    }

    updateGroceryList(newIngredient: Ingredient) {
        let ingredient = newIngredient;

        this.groceryList.ingredients.push(ingredient);
    }

    ngOnInit() {
        this.groceryListService.getGroceryList(1)
            .then(groceryList => {
                this.groceryList = groceryList;
            })
            .catch(error => console.log(error));
    }
}