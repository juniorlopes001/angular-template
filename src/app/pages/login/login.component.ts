import { GlobalValuesService } from 'src/app/_services/global-values.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../../_services/alert.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;
  public sendForm: Boolean = false;
  public loading: Boolean = false;

  constructor(
    private global: GlobalValuesService,
    private formBuilder: FormBuilder,
    private alert: AlertService,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  get f() { return this.formLogin.controls; }

  initForm() {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(4)]]
    });
  }

  isValid() {
    return this.formLogin.controls.email.valid && this.formLogin.controls.password.valid;
  }

  login() {
    if (!this.formLogin.valid) {
      return;
    }

    if (this.sendForm) {
      return;
    }

    this.sendForm = true;
    this.loading = true;
    const email = this.formLogin.controls.email.value;
    const password = this.formLogin.controls.password.value;

    this.authenticationService.login(email, password).subscribe(
      result => {
        this.loading = false;

        if (result) {
          this.global.setShowMainMenu(false);
          this.router.navigate(['/']);
          return;
        }

        this.sendForm = false;
        this.alert.error('Invalid email or password!');
      },
      err => {
        this.loading = false;
        this.sendForm = false;
        console.log(err);
        this.alert.error('Error connecting to the database!');
      }
    );
  }
}
