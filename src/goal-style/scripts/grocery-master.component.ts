import { Component } from "@angular/core";

import { Router } from "@angular/router";

@Component({
    selector: "grocery-master",
    templateUrl: "html-components/grocery-master.html",
    styleUrls: ["appCss/grocery-master.css"]
})

export class GroceryMasterComponent {
    title = "Grocery Master";
    constructor(
        private router: Router) {
    }
}