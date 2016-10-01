import { Component, OnInit } from "@angular/core";

import { MealService } from "./meal.service";

import { IngredientService } from "./ingredient.service";

import { Meal } from "./meal";

import { Ingredient } from "./ingredient";

@Component({
    selector: "create-meal",
    templateUrl: "html-components/grocery-components/create-meal.component.html",
    styleUrls: ["appCss/create-meal.component.css"]
})

export class CreateMealComponent implements OnInit {
    title = "Create Meal";
    meal: Meal;
    ingredient: Ingredient;
    error: any;
    addingIngredient = false;
    isMealSaved = false;

    constructor(
        private mealService: MealService,
        private ingredientService: IngredientService) { }

    private createNewMeal(): void {
        this.meal = new Meal();
        this.meal.ingredients = [];
        this.ingredient = new Ingredient();
    }

    addIngredient(): void {
        this.addingIngredient = true;
    }

    saveMeal(): void {
        this.mealService
            .save(this.meal)
            .then(meal => {
                this.meal = meal;
                this.mealService.isAddingMeal(meal);
                this.isMealSaved = true;
            })
            .catch(error => this.error = error);
    }

    saveIngredient(): void {
        this.ingredientService.isAddingIngredient(this.ingredient);
        this.meal.ingredients.push(this.ingredient);
        this.ingredient = new Ingredient();
        this.saveMeal();
        this.addingIngredient = false;
    }

    addNewMeal(): void {
        this.isMealSaved = false;
        this.createNewMeal();
    }

    ngOnInit() {
        //this.route.params.forEach((params: Params) => {
            //if (params["id"] !== undefined) {
            //    let id = +params["id"];
            //} else {
        this.createNewMeal();
            //}
        //});
    }
}