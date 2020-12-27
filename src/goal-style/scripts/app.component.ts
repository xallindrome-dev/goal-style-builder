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
    mainMarginLeft = 0;
    navPaddingRight = 70;
    showOverlay = false;
    sidenavMenuGlyph = 'glyphicon-menu-hamburger';

    constructor() { }

    toggleSideNav(toggleNav: boolean) {
        if (toggleNav) {
            this.sideNavWidth = 250;
            this.mainMarginLeft = -250;
            this.navPaddingRight = 250;
            this.showOverlay = true;
            this.sidenavMenuGlyph = 'glyphicon-remove';
        } else {
            this.sideNavWidth = 0;
            this.mainMarginLeft = 0;
            this.navPaddingRight = 70;
            this.showOverlay = false;
            this.sidenavMenuGlyph = 'glyphicon-menu-hamburger';
        }
    }
}