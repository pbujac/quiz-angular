import { Component } from '@angular/core';
import { AuthService } from "app/modules/auth/auth.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { User } from '../../model/user';


@Component({
    templateUrl: "/login.page.html",
    styleUrls: ['login.scss']
})
export class LoginPageComponent {

    loginForm: FormGroup;
    errors: any;

    constructor(
        private authService: AuthService
    ) {

        this.loginForm = new FormGroup({
            username: new FormControl('', Validators.required),
            password: new FormControl('', [Validators.required, Validators.minLength(5)])
        });
    }

    onSubmit() {
         let user = new User(
            this.loginForm.value.username,
            this.loginForm.value.password,
            null,
            null
        );
        this.authService.login(user).subscribe(
            results => { },
            err => {
                this.errors = err;
            }
        );
    }

}