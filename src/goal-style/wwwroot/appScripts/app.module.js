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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require("@angular/forms");
var http_1 = require('@angular/http');
var angular2_in_memory_web_api_1 = require('angular2-in-memory-web-api');
var in_memory_data_service_1 = require('./in-memory-data.service');
var meal_service_1 = require("./meal.service");
var ingredient_service_1 = require("./ingredient.service");
var grocery_list_service_1 = require("./grocery-list.service");
var app_routing_1 = require("./app.routing");
var grocery_master_component_1 = require("./grocery-master.component");
var grocery_list_component_1 = require("./grocery-list.component");
var create_meal_component_1 = require("./create-meal.component");
var ingredient_component_1 = require("./ingredient.component");
var ingredient_details_component_1 = require("./ingredient-details.component");
var meal_list_component_1 = require("./meal-list.component");
var goal_master_component_1 = require("./goal-master.component");
var fitness_master_component_1 = require("./fitness-master.component");
var app_component_1 = require('./app.component');
var sidenav_component_1 = require("./sidenav.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_1.routing,
                http_1.HttpModule
            ],
            declarations: [
                app_component_1.AppComponent,
                grocery_master_component_1.GroceryMasterComponent,
                grocery_list_component_1.GroceryListComponent,
                create_meal_component_1.CreateMealComponent,
                ingredient_component_1.IngredientComponent,
                ingredient_details_component_1.IngredientDetailsComponent,
                meal_list_component_1.MealListComponent,
                goal_master_component_1.GoalMasterComponent,
                fitness_master_component_1.FitnessMasterComponent,
                sidenav_component_1.SideNav
            ],
            providers: [
                meal_service_1.MealService,
                grocery_list_service_1.GroceryListService,
                ingredient_service_1.IngredientService,
                { provide: http_1.XHRBackend, useClass: angular2_in_memory_web_api_1.InMemoryBackendService },
                { provide: angular2_in_memory_web_api_1.SEED_DATA, useClass: in_memory_data_service_1.InMemoryDataService }
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
