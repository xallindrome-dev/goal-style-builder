"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var grocery_list_1 = require("./grocery-list");
var grocery_list_service_1 = require("./grocery-list.service");
var ingredient_service_1 = require("./ingredient.service");
var GroceryListComponent = (function () {
    function GroceryListComponent(ingredientService, groceryListService) {
        var _this = this;
        this.ingredientService = ingredientService;
        this.groceryListService = groceryListService;
        this.title = "Grocery List";
        ingredientService.ingredientAdded$.subscribe(function (ingredient) { return _this.updateGroceryList(ingredient); });
    }
    GroceryListComponent.prototype.updateGroceryList = function (newIngredient) {
        var ingredient = newIngredient;
        this.groceryList.ingredients.push(ingredient);
    };
    GroceryListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.groceryListService.getGroceryList(1)
            .then(function (groceryList) {
            _this.groceryList = groceryList;
        })
            .catch(function (error) { return console.log(error); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', grocery_list_1.GroceryList)
    ], GroceryListComponent.prototype, "groceryList", void 0);
    GroceryListComponent = __decorate([
        core_1.Component({
            selector: "grocery-list",
            templateUrl: "html-components/grocery-components/grocery-list.component.html"
        }), 
        __metadata('design:paramtypes', [ingredient_service_1.IngredientService, grocery_list_service_1.GroceryListService])
    ], GroceryListComponent);
    return GroceryListComponent;
}());
exports.GroceryListComponent = GroceryListComponent;
