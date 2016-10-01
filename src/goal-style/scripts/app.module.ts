import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpModule, XHRBackend } from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './in-memory-data.service';

import { MealService } from "./meal.service";

import { IngredientService } from "./ingredient.service";

import { GroceryListService } from "./grocery-list.service";

import { routing } from "./app.routing";

import { GroceryMasterComponent } from "./grocery-master.component";
import { GroceryListComponent } from "./grocery-list.component";
import { CreateMealComponent } from "./create-meal.component";
import { IngredientComponent } from "./ingredient.component";
import { IngredientDetailsComponent } from "./ingredient-details.component";
import { MealListComponent } from "./meal-list.component";

import { GoalMasterComponent } from "./goal-master.component";
import { FitnessMasterComponent } from "./fitness-master.component";

import { AppComponent }  from './app.component';

import { SideNav } from "./sidenav.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule
    ],
    declarations: [
        AppComponent,
        GroceryMasterComponent,
        GroceryListComponent,
        CreateMealComponent,
        IngredientComponent,
        IngredientDetailsComponent,
        MealListComponent,
        GoalMasterComponent,
        FitnessMasterComponent,
        SideNav
    ],
    providers: [
        MealService,
        GroceryListService,
        IngredientService,
        { provide: XHRBackend, useClass: InMemoryBackendService },
        { provide: SEED_DATA, useClass: InMemoryDataService }
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }