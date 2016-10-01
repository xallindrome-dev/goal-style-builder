"use strict";
var router_1 = require("@angular/router");
var grocery_master_component_1 = require("./grocery-master.component");
var goal_master_component_1 = require("./goal-master.component");
var fitness_master_component_1 = require("./fitness-master.component");
var appRoutes = [
    {
        path: "",
        redirectTo: "/grocery",
        pathMatch: "full"
    },
    {
        path: "grocery",
        component: grocery_master_component_1.GroceryMasterComponent
    },
    {
        path: "goal",
        component: goal_master_component_1.GoalMasterComponent
    },
    {
        path: "fitness",
        component: fitness_master_component_1.FitnessMasterComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
