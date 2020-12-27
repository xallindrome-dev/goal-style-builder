import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "sidenav",
    templateUrl: "html-components/sidenav.component.html",
    styleUrls: ["appCss/sidenav.component.css"]
})

export class SideNav {
    @Input() sideNavWidth: number;
    @Input() showOverlay: boolean;
    @Input() sidenavMenuGlyph: string;
    @Output() toggleNav = new EventEmitter<boolean>();

    localToggle = false;

    toggleSideNav() {
        this.localToggle = !this.localToggle;
        this.toggleNav.emit(this.localToggle);
    }
}