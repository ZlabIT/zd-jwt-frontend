import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {JwtService} from "../../services/jwt.service";

@Component({
    selector: 'app-dashboard-component',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    protected hello$: Observable<any>;

    constructor(private jwtService: JwtService) {
    }

    ngOnInit(): void {
        this.hello$ = this.jwtService.hello();
    }
}
