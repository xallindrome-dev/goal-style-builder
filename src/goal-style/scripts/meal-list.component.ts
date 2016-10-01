import { Component, OnInit } from "@angular/core";

import { Meal } from "./meal";

import { MealService } from "./meal.service";

@Component({
    selector: "meal-list",
    templateUrl: "html-components/grocery-components/meal-list.component.html"
})

export class MealListComponent {
    title = "Meal List";
    constructor(private mealService: MealService) {
        mealService.mealAdded$.subscribe(() => this.getMeals());
    }

    meals: Meal[];
    selectedMeal: Meal;
    error: any;

    getMeals() {
        this.mealService.getMeals().then(meals => this.meals = meals);
    }

    ngOnInit() {
        this.getMeals();
    }
}
