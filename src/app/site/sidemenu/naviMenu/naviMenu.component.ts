import { Component, OnInit } from '@angular/core';
import { MenusService } from './menu.service';
@Component({
    selector: 'app-navi-menu',
    templateUrl: './naviMenu.component.html',
    styleUrls: ['./naviMenu.component.css']
})
export class NaviMenuComponent implements OnInit {
    menus = [];

    constructor(
        private _menusService: MenusService
    ) { }
    ngOnInit() {
        this._menusService.getMenu().then(data => {
            this.menus = data;
        });
    }
};