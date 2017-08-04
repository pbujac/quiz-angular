import { Component } from '@angular/core';
import { HomeService } from "app/modules/home/home.service";
@Component({
    templateUrl: "/home.page.html"
})
export class HomePageComponent {

    users : any;
    
    constructor(private homeService: HomeService) {
        this.users = homeService.getUsers('Alex');
    }
 }