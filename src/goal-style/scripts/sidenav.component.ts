import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "sidenav",
    templateUrl: "html-components/sidenav.component.html",
    styleUrls: ["appCss/sidenav.component.css"]
})

export class SideNav {
    @Input() sideNavWidth: number;
    @Input() showOverlay: boolean;
    @Output() closeNav = new EventEmitter<boolean>();

    closeSideNav() {
        this.closeNav.emit(true);
    }
}