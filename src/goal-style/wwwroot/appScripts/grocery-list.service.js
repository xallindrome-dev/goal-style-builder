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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var GroceryListService = (function () {
    function GroceryListService(http) {
        this.http = http;
        this.groceryListUrl = "appScripts/groceryList";
    }
    GroceryListService.prototype.handleError = function (error) {
        console.log("An error occurred", error);
        return Promise.reject(error.message || error);
    };
    GroceryListService.prototype.getGroceriesList = function () {
        return this.http.get(this.groceryListUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    GroceryListService.prototype.getGroceryList = function (id) {
        return this.getGroceriesList().then(function (groceriesList) { return groceriesList.find(function (groceryList) { return groceryList.id === id; }); });
    };
    return GroceryListService;
}());
GroceryListService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GroceryListService);
exports.GroceryListService = GroceryListService;
//# sourceMappingURL=grocery-list.service.js.map