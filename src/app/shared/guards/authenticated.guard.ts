// logged-in.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthenticatedGuard implements CanActivate {

    isLoggedIn: boolean = false;

    constructor(private router: Router) {
    }

    canActivate() : boolean {
        if (localStorage.getItem('authentication')) {
            this.isLoggedIn = true;

            return  this.isLoggedIn;
        }

        this.router.navigate(['/login']);

        return this.isLoggedIn;
    }
}