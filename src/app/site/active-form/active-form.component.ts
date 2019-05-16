import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'active-form',
    templateUrl: './active-form.component.html',
    styleUrls: ['./active-form.component.scss']
})

export class ActiveFormComponent {
    name = new FormControl('');

    updateName() {
        this.name.setValue('Nancy');
    }

}
