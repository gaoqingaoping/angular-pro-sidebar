import { Component, OnInit } from '@angular/core';

import { SidebarService } from './sidemenu/sidebar.service';

@Component({
    selector: 'app-site',
    styleUrls: ['./site.component.scss'],
    templateUrl: './site.component.html',
})

export class SiteComponent implements OnInit {
    title = 'ECOM';
    constructor(public sidebarservice: SidebarService) { }

    ngOnInit() {

    }

    toggleSidebar() {
        this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
    }
    toggleBackgroundImage() {
        this.sidebarservice.hasBackgroundImage = !this.sidebarservice.hasBackgroundImage;
    }
    getSideBarState() {
        return this.sidebarservice.getSidebarState();
    }
    hideSidebar() {
        this.sidebarservice.setSidebarState(true);
    }
}
