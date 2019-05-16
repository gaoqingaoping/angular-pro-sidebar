import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteComponent } from './site.component';
import { ActiveFormComponent } from './active-form/active-form.component';
import { ActiveForm2Component } from './active-form2/active-form2.component';

const routes: Routes = [{
    path: '',
    component: SiteComponent,
    children: [{
        path: 'active-form',
        component: ActiveFormComponent,
    }, {
        path: 'active-form2',
        component: ActiveForm2Component,
    }],
},
{ path: '', redirectTo: 'tutorial', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class SiteRoutingModule { }


