import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  template: `
        <h4>Sign In</h4>
        <form class="form-group" [formGroup]="formSignIn">
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
            <button class="btn btn-success">Sign In</button>
        </form>
        <pre>{{ formSignIn.value | json }}</pre>
  `,
  styles: [`form { width: 300px; }`]
})

export class SignInComponent {
    formSignIn = new FormGroup({
        email: new FormControl('teo@gmail.com'),
        password: new FormControl(''),
    });
}
