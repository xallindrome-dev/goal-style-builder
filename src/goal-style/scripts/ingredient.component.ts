import { Component, Input } from "@angular/core";

import { Ingredient } from "./ingredient";

@Component({
    selector: "ingredient",
    templateUrl: "html-components/grocery-components/create-meal-components/ingredient.component.html",
    styleUrls: ["appCss/ingredient.component.css"]
})

export class IngredientComponent {
    @Input() ingredient: Ingredient;
    error: any;
}