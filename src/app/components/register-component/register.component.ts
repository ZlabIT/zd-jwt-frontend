import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {JwtService} from "../../services/jwt.service";

function passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
        return {'passwordMismatch': true};
    }

    return null;
}

@Component({
    selector: 'app-register-component',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

    protected registerForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required]),
        confirmPassword: new FormControl('', [Validators.required]),
    }, {validators: passwordMatchValidator});


    constructor(private jwtService: JwtService) {
    }

    submitForm() {
        console.log(this.registerForm.value);
        this.jwtService.register(this.registerForm.value).subscribe(
            {
                next: response => {
                    console.log(response);

                    alert('Hello ' + response.name + ' !');
                },
                error: err => {
                    console.log(err);
                    alert('Forbidden');
                }
            }
        )
    }
}
