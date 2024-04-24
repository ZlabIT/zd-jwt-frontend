import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {JwtService} from "../../services/jwt.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    protected loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
    });

    constructor(private jwtService: JwtService,
                private fb: FormBuilder,
                private router: Router
    ) {
    }

    submitForm() {
        this.jwtService.login(this.loginForm.value).subscribe({
            next: response => {
                console.log(response);
                const jwtToken = response.jwt;

                if (jwtToken != null) {
                    alert('Hello, your token is ' + jwtToken);

                    localStorage.setItem('jwtToken', jwtToken);
                    this.router.navigateByUrl('/dashboard');
                }
            },
            error: err => {
                console.log(err);
                alert('Forbidden');
            }
        })
    }
}
