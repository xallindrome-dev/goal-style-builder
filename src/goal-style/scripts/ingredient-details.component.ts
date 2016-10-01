import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { Ingredient } from "./ingredient";

@Component({
    selector: "ingredient-details",
    templateUrl: "html-components/grocery-components/create-meal-components/ingredient-details.component.html"
})

export class IngredientDetailsComponent implements OnInit {
    @Input() ingredient: Ingredient;
    @Output() close = new EventEmitter();
    error: any;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        //this.route.params.forEach((params: Params) => {
        //if (params["id"] !== undefined) {
        //    let id = +params["id"];
        //} else {
        //this.ingredient = new Ingredient();
        //}
        //});
    }
}