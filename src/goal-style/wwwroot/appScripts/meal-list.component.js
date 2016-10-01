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
var meal_service_1 = require("./meal.service");
var MealListComponent = (function () {
    function MealListComponent(mealService) {
        var _this = this;
        this.mealService = mealService;
        this.title = "Meal List";
        mealService.mealAdded$.subscribe(function () { return _this.getMeals(); });
    }
    MealListComponent.prototype.getMeals = function () {
        var _this = this;
        this.mealService.getMeals().then(function (meals) { return _this.meals = meals; });
    };
    MealListComponent.prototype.ngOnInit = function () {
        this.getMeals();
    };
    MealListComponent = __decorate([
        core_1.Component({
            selector: "meal-list",
            templateUrl: "html-components/grocery-components/meal-list.component.html"
        }), 
        __metadata('design:paramtypes', [meal_service_1.MealService])
    ], MealListComponent);
    return MealListComponent;
}());
exports.MealListComponent = MealListComponent;
