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
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var MealService = (function () {
    function MealService(http) {
        this.http = http;
        this.mealsUrl = "appScripts/meals";
        this.mealAdded$ = new core_1.EventEmitter();
    }
    MealService.prototype.handleError = function (error) {
        console.log("An error occurred", error);
        return Promise.reject(error.message || error);
    };
    MealService.prototype.post = function (meal) {
        var headers = new http_1.Headers({
            "Content-type": "application/json"
        });
        return this.http.post(this.mealsUrl, JSON.stringify(meal), { headers: headers })
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    MealService.prototype.put = function (meal) {
        var headers = new http_1.Headers({
            "Content-type": "application/json"
        });
        var url = this.mealsUrl + "/" + meal.id;
        return this.http
            .put(url, JSON.stringify(meal), { headers: headers })
            .toPromise()
            .then(function () { return meal; })
            .catch(this.handleError);
    };
    MealService.prototype.isAddingMeal = function (meal) {
        this.mealAdded$.emit(meal);
    };
    MealService.prototype.getMeals = function () {
        return this.http.get(this.mealsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    MealService.prototype.getMeal = function (id) {
        return this.getMeals().then(function (meals) { return meals.find(function (meal) { return meal.id === id; }); });
    };
    MealService.prototype.delete = function (meal) {
        var headers = new http_1.Headers({
            "Content-Type": "application/json"
        });
        var url = this.mealsUrl + "/" + meal.id;
        return this.http
            .delete(url, { headers: headers })
            .toPromise()
            .catch(this.handleError);
    };
    MealService.prototype.save = function (meal) {
        if (meal.id) {
            return this.put(meal);
        }
        return this.post(meal);
    };
    MealService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MealService);
    return MealService;
}());
exports.MealService = MealService;
