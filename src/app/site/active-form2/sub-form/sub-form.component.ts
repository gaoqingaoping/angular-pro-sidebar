import {
    Component,
    OnInit,
    Input
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-sub-reactive-form',
    templateUrl: './sub-form.component.html',
    styleUrls: ['./sub-form.component.scss']
})

export class ActiveForm2SubFormComponent implements OnInit {
    @Input() parentFormGroup: FormGroup;
    subForm: FormGroup;


    constructor(private fb: FormBuilder) {
        this.subForm = this.fb.group({ // 这里用subForm来测试将一个复杂的form表单拆分成多个组件来做，这样减少每个组件的复杂度，也更加便于维护
            value1: ['value1', Validators.required],
            value2: ['value2'],
            value3: ['value3'],
            value4: ['value4']
        });

        this.subForm.controls.value1.valueChanges.subscribe((value) => {
            this.subForm.controls.value2.setValue(value);
            this.parentFormGroup.controls.firstName.setValue(value);
        });

        // this.profileForm.controls.gender3.valueChanges.subscribe((value) => {
        //     this.profileForm.controls.gender.setValue(value);
        //     this.profileForm.controls.firstName.enable();
        //     console.log(this.profileForm);
        // });
    }


    ngOnInit() {
        this.parentFormGroup.addControl('subForm', this.subForm);
    }


}
