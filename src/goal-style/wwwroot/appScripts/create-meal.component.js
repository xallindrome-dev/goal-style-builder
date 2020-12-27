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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var meal_service_1 = require("./meal.service");
var ingredient_service_1 = require("./ingredient.service");
var meal_1 = require("./meal");
var ingredient_1 = require("./ingredient");
var CreateMealComponent = (function () {
    function CreateMealComponent(mealService, ingredientService) {
        this.mealService = mealService;
        this.ingredientService = ingredientService;
        this.title = "Create Meal";
        this.addingIngredient = false;
        this.isMealSaved = false;
    }
    CreateMealComponent.prototype.createNewMeal = function () {
        this.meal = new meal_1.Meal();
        this.meal.ingredients = [];
        this.ingredient = new ingredient_1.Ingredient();
    };
    CreateMealComponent.prototype.addIngredient = function () {
        this.addingIngredient = true;
    };
    CreateMealComponent.prototype.saveMeal = function () {
        var _this = this;
        this.mealService
            .save(this.meal)
            .then(function (meal) {
            _this.meal = meal;
            _this.mealService.isAddingMeal(meal);
            _this.isMealSaved = true;
        })
            .catch(function (error) { return _this.error = error; });
    };
    CreateMealComponent.prototype.saveIngredient = function () {
        this.ingredientService.isAddingIngredient(this.ingredient);
        this.meal.ingredients.push(this.ingredient);
        this.ingredient = new ingredient_1.Ingredient();
        this.saveMeal();
        this.addingIngredient = false;
    };
    CreateMealComponent.prototype.addNewMeal = function () {
        this.isMealSaved = false;
        this.addingIngredient = false;
        this.createNewMeal();
    };
    CreateMealComponent.prototype.ngOnInit = function () {
        //this.route.params.forEach((params: Params) => {
        //if (params["id"] !== undefined) {
        //    let id = +params["id"];
        //} else {
        this.createNewMeal();
        //}
        //});
    };
    return CreateMealComponent;
}());
CreateMealComponent = __decorate([
    core_1.Component({
        selector: "create-meal",
        templateUrl: "html-components/grocery-components/create-meal.component.html",
        styleUrls: ["appCss/create-meal.component.css"]
    }),
    __metadata("design:paramtypes", [meal_service_1.MealService,
        ingredient_service_1.IngredientService])
], CreateMealComponent);
exports.CreateMealComponent = CreateMealComponent;
//# sourceMappingURL=create-meal.component.js.map