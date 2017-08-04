// logged-in.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthenticatedGuard implements CanActivate {

    isLoggedIn: boolean = true;

    constructor(private router: Router) {
    }

    canActivate() {
        return this.isLoggedIn;
    }
}