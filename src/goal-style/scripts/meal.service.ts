import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";

import "rxjs/add/operator/toPromise";

import { Meal } from "./meal";

@Injectable()
export class MealService {
    private mealsUrl = "appScripts/meals";
    public mealAdded$: EventEmitter<Meal>;

    constructor(private http: Http) {
        this.mealAdded$ = new EventEmitter<Meal>();
    }

    private handleError(error: any): Promise<any> {
        console.log("An error occurred", error);
        return Promise.reject(error.message || error);
    }

    private post(meal: Meal): Promise<Meal> {
        let headers = new Headers({
            "Content-type": "application/json"
        });

        return this.http.post(this.mealsUrl,
            JSON.stringify(meal), { headers: headers })
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    private put(meal: Meal): Promise<Meal> {
        let headers = new Headers({
            "Content-type": "application/json"
        });

        let url = `${this.mealsUrl}/${meal.id}`;

        return this.http
            .put(url, JSON.stringify(meal),
            { headers: headers })
            .toPromise()
            .then(() => meal)
            .catch(this.handleError);
    }

    isAddingMeal(meal: Meal): void {
        this.mealAdded$.emit(meal);
    }

    getMeals(): Promise<Meal[]> {
        return this.http.get(this.mealsUrl)
            .toPromise()
            .then(response => response.json().data as Meal[])
            .catch(this.handleError);
    }

    getMeal(id: number) {
        return this.getMeals().then(meals => meals.find(
            meal => meal.id === id
        ));
    }

    delete(meal: Meal): Promise<Response> {
        let headers = new Headers({
            "Content-Type": "application/json"
        });

        let url = `${this.mealsUrl}/${meal.id}`;

        return this.http
            .delete(url, { headers: headers })
            .toPromise()
            .catch(this.handleError);
    }

    save(meal: Meal): Promise<Meal> {
        if (meal.id) {
            return this.put(meal);
        }
        return this.post(meal);
    }
}