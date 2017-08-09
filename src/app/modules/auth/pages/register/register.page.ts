import { User } from '../../model/user';
import { Component } from '@angular/core';
import { AuthService } from "app/modules/auth/auth.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
    templateUrl: '/register.page.html',
    styleUrls: ['/register.scss'],
})
export class RegisterPageComponent {

    registerForm: FormGroup;
    errors: any;

    constructor(
        private authService: AuthService
    ) {
        this.registerForm = new FormGroup({
            username: new FormControl('admin', Validators.required),
            password: new FormControl('admin', [Validators.required, Validators.minLength(5)]),
            firstName: new FormControl('admin', [Validators.required, Validators.minLength(5)]),
            lastName: new FormControl('admin', [Validators.required, Validators.minLength(5)]),
        });
    }

    public onSubmit() {
        let user = new User(
            this.registerForm.value.username,
            this.registerForm.value.password,
            this.registerForm.value.firstName,
            this.registerForm.value.lastName
        );

        this.authService.register(user).subscribe(
            results => {},
            err => {
                this.errors = err;
            }
        );
    }

}