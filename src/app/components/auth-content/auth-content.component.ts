import {Component, OnInit} from '@angular/core';
import {AxiosService} from "../../services/axios.service";

@Component({
    selector: 'app-auth-content',
    templateUrl: './auth-content.component.html',
    styleUrls: ['./auth-content.component.scss']
})
export class AuthContentComponent implements OnInit {

    data: string[];


    constructor(private axiosService: AxiosService) {
    }

    ngOnInit() {
        this.axiosService.request(
            "GET",
            "/messages",
            null
        ).then((response) => this.data = response.data)
    }
}
