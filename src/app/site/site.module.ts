import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SiteRoutingModule } from './site-routing.module';
import { SiteComponent } from './site.component';
import { SidebarComponent } from './sidemenu/sidebar.component';
import { NaviMenuComponent } from './sidemenu/naviMenu/naviMenu.component';
import { NaviItemComponent } from './sidemenu/naviMenu/naviItem/naviItem.component';
import { ActiveFormComponent } from './active-form/active-form.component';
import { ActiveForm2Component } from './active-form2/active-form2.component';
import { ActiveForm2SubFormComponent } from './active-form2/sub-form/sub-form.component';

const SITE_COMPONENTS = [
    SiteComponent,
    SidebarComponent,
    NaviMenuComponent,
    NaviItemComponent,
    ActiveFormComponent,
    ActiveForm2Component,
    ActiveForm2SubFormComponent
];

@NgModule({
  imports: [
    CommonModule,
    SiteRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
      ...SITE_COMPONENTS
  ],
})
export class SiteModule {
}
