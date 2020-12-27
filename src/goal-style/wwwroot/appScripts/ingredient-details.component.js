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
var router_1 = require("@angular/router");
var ingredient_1 = require("./ingredient");
var IngredientDetailsComponent = (function () {
    function IngredientDetailsComponent(route) {
        this.route = route;
        this.close = new core_1.EventEmitter();
    }
    IngredientDetailsComponent.prototype.ngOnInit = function () {
        //this.route.params.forEach((params: Params) => {
        //if (params["id"] !== undefined) {
        //    let id = +params["id"];
        //} else {
        //this.ingredient = new Ingredient();
        //}
        //});
    };
    return IngredientDetailsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", ingredient_1.Ingredient)
], IngredientDetailsComponent.prototype, "ingredient", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], IngredientDetailsComponent.prototype, "close", void 0);
IngredientDetailsComponent = __decorate([
    core_1.Component({
        selector: "ingredient-details",
        templateUrl: "html-components/grocery-components/create-meal-components/ingredient-details.component.html"
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], IngredientDetailsComponent);
exports.IngredientDetailsComponent = IngredientDetailsComponent;
//# sourceMappingURL=ingredient-details.component.js.map