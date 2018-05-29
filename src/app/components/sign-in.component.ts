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
            <br/>
            <input
                class="form-control"
                placeholder="Password"
                formControlName="password"
                type="password"
            />
            <br/>
            <button class="btn btn-success" [disabled]="formSignIn.invalid">
                Sign In
            </button>
        </form>
        <pre>{{ formSignIn.value | json }}</pre>
        <pre>VALID: {{ formSignIn.valid }}</pre>
  `,
  styles: [`form { width: 300px; }`]
})

export class SignInComponent {
    formSignIn: FormGroup;

    constructor(private fb: FormBuilder) {
        this.formSignIn = this.fb.group({
            email: ['', [Validators.email, Validators.required]],
            password: ['', [Validators.minLength(5), Validators.required]]
        });
    }

    signIn() {
        alert(JSON.stringify(this.formSignIn.value));
    }
}
