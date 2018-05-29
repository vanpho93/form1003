import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  template: `
        <h4>Sign Up</h4>
        <form class="form-group" [formGroup]="formSignUp">
            <input
                class="form-control"
                placeholder="Email"
                formControlName="email"
            />
            <div style="margin: 10px;">
            </div>
            <input
                class="form-control"
                placeholder="Password"
                formControlName="password"
                type="password"
            />
            <div style="margin: 10px;">
                <i *ngIf="password.invalid && password.touched">Password không hợp lệ</i>
            </div>
            <input
                class="form-control"
                placeholder="Re-enter your password"
                formControlName="repassword"
                type="password"
            />
            <div style="margin: 10px;">
                <i *ngIf="repassword.touched && formSignUp.errors?.error">Password không trùng nhau</i>
            </div>
            <button class="btn btn-success" [disabled]="formSignUp.invalid">
                Sign Up
            </button>
        </form>
        <pre>{{ formSignUp.value | json }}</pre>
        <pre>VALID: {{ formSignUp.valid }}</pre>
        <pre>Errors: {{ formSignUp.errors | json }}</pre>
  `,
  styles: [`
      form { width: 300px; }
      i { color: red; }
      input.ng-touched.ng-invalid { border-color: red }`
    ]
})

export class SignUpComponent {
    formSignUp: FormGroup;

    constructor(private fb: FormBuilder) {
        // this.formSignUp = this.fb.group({
        //     email: ['a@gmail.com', [Validators.email, Validators.required]],
        //     password: ['', [Validators.minLength(5), Validators.required]],
        //     repassword: ['', [Validators.minLength(5), Validators.required]]
        // }, passwordMustMatch);
        this.formSignUp = new FormGroup({
            email: new FormControl('', [Validators.email, Validators.required]),
            password: new FormControl('', [Validators.minLength(5), Validators.required]),
            repassword: new FormControl('', [Validators.minLength(5), Validators.required]),
        }, passwordMustMatch);
    }

    SignUp() {
        alert(JSON.stringify(this.formSignUp.value));
    }

    get email() {
        return this.formSignUp.get('email');
    }

    get password() {
        return this.formSignUp.get('password');
    }

    get repassword() {
        return this.formSignUp.get('repassword');
    }
}

function passwordMustMatch(formGroup: FormGroup) {
    const password = formGroup.get('password');
    const respassword = formGroup.get('repassword');
    if (password.value === respassword.value) return null;
    return { error: 'passwordMustMatch' };
}
