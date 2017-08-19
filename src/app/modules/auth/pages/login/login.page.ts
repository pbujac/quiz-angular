import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "app/modules/auth/auth.service";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {User} from "../../model/user.model";


@Component({
  templateUrl: "/login.page.html",
  styleUrls: ['login.scss']
})
export class LoginPageComponent implements OnInit {

  protected loginForm: FormGroup;
  protected error: any;

  /**
   * @param {AuthService} authService
   * @param {Router} router
   */
  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    });

  }

  public onLogin(): void {

    let user = new User(
      this.loginForm.value.username,
      this.loginForm.value.password,
      null,
      null
    );
    this.authService.login(user).subscribe(res => {
        this.router.navigate(['/']);
      }, err => {
        this.error = err.error;
      }
    );
  }

}
