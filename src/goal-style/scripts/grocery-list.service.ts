import { Injectable } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";

import "rxjs/add/operator/toPromise";

import { GroceryList } from "./grocery-list";

@Injectable()
export class GroceryListService {
    private groceryListUrl = "appScripts/groceryList";

    constructor(private http: Http) { }

    private handleError(error: any): Promise<any> {
        console.log("An error occurred", error);
        return Promise.reject(error.message || error);
    }

    getGroceriesList(): Promise<GroceryList[]> {
        return this.http.get(this.groceryListUrl)
            .toPromise()
            .then(response => response.json().data as GroceryList[])
            .catch(this.handleError);
    }

    getGroceryList(id: number) {
        return this.getGroceriesList().then(groceriesList => groceriesList.find(
            groceryList => groceryList.id === id
        ));
    }
}