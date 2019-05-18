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

    profileForm: FormGroup;

    gender = ['男', '女'];

    gender2 = {
        0: '男',
        1: '女'
    };

    gender3 = [
        {
            'itemLable': '男',
            'itemValue': 0
        },
        {
            'itemLable': '女',
            'itemValue': 1
        }
    ];

    constructor(private fb: FormBuilder) {
        this.profileForm = this.fb.group({
            firstName: '',
            lastName: ['qin', [Validators.required]],
            gender: [0],
            gender2: [0],
            gender3: [''],
            address: this.fb.group({ // 子group中的控件可以和父group中重名，group有类似“命名空间”的感觉
                street: [''],
                city: [''],
                state: [''],
                zip: ['']
            })
            // subForms: FormGroup //具体内容在子组件中再使用 parentFormGroup.addControl 动态添加
        });
        this.profileForm.controls.gender3.valueChanges.subscribe((value) => {
            this.profileForm.controls.gender.setValue(value);
            this.profileForm.controls.firstName.enable();
            this.profileForm.controls.firstName.setValidators(Validators.required); //动态调整验证规则
            console.log(this.profileForm);
        });
    }


    ngOnInit() {
        this.profileForm.controls.firstName.setValue('gao-new-name');
        // this.profileForm.controls.firstName.disable();
        this.profileForm.controls.firstName.setValidators(Validators.required);
    }

    onSubmit() {
        console.log(this.profileForm);
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

    myOnChange() {
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
