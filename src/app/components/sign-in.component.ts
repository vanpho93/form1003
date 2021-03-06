import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  template: `
        <h4>Sign In</h4>
        <form class="form-group" [formGroup]="formSignIn" (ngSubmit)="signIn();">
            <input
                class="form-control"
                placeholder="Email"
                formControlName="email"
            />
            <div style="margin: 10px;">
                <i *ngIf="email.invalid && email.touched">Email không hợp lệ</i>
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
            <button class="btn btn-success" [disabled]="formSignIn.invalid">
                Sign In
            </button>
        </form>
        <pre>{{ formSignIn.value | json }}</pre>
        <pre>VALID: {{ formSignIn.valid }}</pre>
  `,
  styles: [`
      form { width: 300px; }
      i { color: red; }
      input.ng-touched.ng-invalid { border-color: red }`
    ]
})

export class SignInComponent {
    formSignIn: FormGroup;

    constructor(private fb: FormBuilder) {
        this.formSignIn = this.fb.group({
            email: ['', [Validators.email, Validators.required, gmail]],
            password: ['', [Validators.minLength(5), Validators.required]]
        });
    }

    signIn() {
        alert(JSON.stringify(this.formSignIn.value));
    }

    get email() {
        return this.formSignIn.get('email');
    }

    get password() {
        return this.formSignIn.get('password');
    }
}

function gmail(control: FormControl) {
    const value = control.value as string;
    if (value.trim().endsWith('@gmail.com')) return null;
    return { error: 'gmail' };
}
