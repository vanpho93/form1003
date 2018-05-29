import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  template: `
        <h4>Sign In</h4>
        <form class="form-group">
            <input class="form-control" placeholder="Email" />
            <br/>
            <input class="form-control" placeholder="Password" />
            <br/>
            <button class="btn btn-success">Sign In</button>
        </form>
  `,
  styles: [`form { width: 300px; }`]
})

export class SignInComponent {}
