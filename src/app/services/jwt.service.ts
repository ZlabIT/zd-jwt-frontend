import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class JwtService {

    static readonly API_BASE_URL = "http://localhost:8080/";

    constructor(private httpClient: HttpClient) {
    }

    register(signRequest: any): Observable<any> {
        return this.httpClient.post(JwtService.API_BASE_URL + "auth/signup", signRequest);
    }

    login(loginRequest: any): Observable<any> {
        return this.httpClient.post(JwtService.API_BASE_URL + "auth/login", loginRequest);
    }

    hello(): Observable<any> {
        return this.httpClient.get(JwtService.API_BASE_URL + "api/hello", {
            headers: this.createAuhtorizationHeader()
        });
    }

    private createAuhtorizationHeader(): HttpHeaders {
        const jwtToken = localStorage.getItem('jwtToken');
        if (jwtToken) {
            console.log('JWT Token found in local storage', jwtToken);

            return new HttpHeaders().set(
                "Authorization", "Bearer " + jwtToken
            );
        }

        console.log('JWT token not found in local storage');
        return null;
    }

}
