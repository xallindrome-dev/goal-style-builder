import { Component } from "@angular/core";

import { Router } from "@angular/router";

@Component({
    selector: "grocery-master",
    templateUrl: "html-components/grocery-master.html"
})

export class GroceryMasterComponent {
    title = "Grocery Master";
    constructor(
        private router: Router) {
    }
}