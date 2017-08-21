import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MatchPasswordValidation} from "app/shared/validators/match-password.validator";
import {ValidCheckBoxValidation} from "app/shared/validators/valid-checkbox.validator";
import {AuthService} from "../../auth.service";
import {User} from "../../model/user.model";

@Component({
  selector: 'qz-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.scss']
})
export class RegisterPageComponent implements OnInit {

  protected registerForm: FormGroup;
  protected error: any;

  /**
   * @param {AuthService} authService
   * @param {Router} router
   */
  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required, Validators.minLength(5)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(5)]),
        firstName: new FormControl('', [Validators.required, Validators.minLength(5)]),
        lastName: new FormControl('', [Validators.required, Validators.minLength(5)]),
        checkControl: new FormControl(false, [Validators.required, ValidCheckBoxValidation])
      },
      MatchPasswordValidation
    );
  }

  public onRegister(): void {

    let user = new User(
      this.registerForm.value.username,
      this.registerForm.value.password,
      this.registerForm.value.firstName,
      this.registerForm.value.lastName
    );

    this.authService.register(user).subscribe(res => {

        this.router.navigate(['home']);
      }, err => {
        this.error = err.error;
      }
    );
  }

}
