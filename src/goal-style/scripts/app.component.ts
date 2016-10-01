import { Component } from "@angular/core";
import './rxjs-extensions';

@Component({
    selector: "my-app",
    templateUrl: "views/app.html",
    styleUrls: ["appCss/app.component.css"]
})

export class AppComponent {
    title = "Goal Style";
    sideNavWidth = 0;
    mainMarginRight = 0;
    showOverlay = false;

    constructor() { }

    openSideNav() {
        this.sideNavWidth = 250;
        this.mainMarginRight = 250;
        this.showOverlay = true;
    }

    closeSideNav(closeNav: boolean) {
        this.sideNavWidth = 0;
        this.mainMarginRight = 0;
        this.showOverlay = false;
    }
}