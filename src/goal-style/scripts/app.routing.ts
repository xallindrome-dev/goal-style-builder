import { Routes, RouterModule } from "@angular/router";

import { GroceryMasterComponent } from "./grocery-master.component";
import { GoalMasterComponent } from "./goal-master.component";
import { FitnessMasterComponent } from "./fitness-master.component";

const appRoutes: Routes = [
    {
        path: "",
        redirectTo: "/grocery",
        pathMatch: "full"
    },
    {
        path: "grocery",
        component: GroceryMasterComponent
    },
    {
        path: "goal",
        component: GoalMasterComponent
    },
    {
        path: "fitness",
        component: FitnessMasterComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);