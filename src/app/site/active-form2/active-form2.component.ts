import {
    Component
    , OnInit
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'active-form2',
    templateUrl: './active-form2.component.html',
    styleUrls: ['./active-form2.component.scss']
})

export class ActiveForm2Component implements OnInit {
    nameDO: any;

    // profileForm = new FormGroup({
    //     firstName: new FormControl(''),
    //     lastName: new FormControl(''),
    //     address: new FormGroup({
    //         street: new FormControl(''),
    //         city: new FormControl(''),
    //         state: new FormControl(''),
    //         zip: new FormControl('')
    //     })
    // });
    constructor(private fb: FormBuilder) { }

    profileForm = this.fb.group({
        firstName: ['gao', Validators.required],
        lastName: ['qin'],
        address: this.fb.group({
            street: [''],
            city: [''],
            state: [''],
            zip: ['']
        }),
    });


    ngOnInit() {
        console.log(this.profileForm);
        return;
        this.nameDO = {
            firstName: 'gao',
            lastName: 'qin'
        };
    }

    onSubmit() {
        console.log(this.profileForm.value);
    }

    //用于部分模型的修改
    updateProfile() {
        this.profileForm.patchValue({
            firstName: 'Nancy',
            address: {
                street: '123 Drew Street'
            }
        });
    }

    myOnChange(){
        console.log('fe');
    }

    // 动态新增表单控件
    // addAction() {
    //     const fb = this.fb
    //     const fbGroup = fb.group({
    //         street: ['', Validators.required],
    //         city: ['', Validators.required],
    //         state: '',
    //         zip: ''
    //     })
    //     this.profileForm.controls.address.push(fbGroup);
    // }


}
