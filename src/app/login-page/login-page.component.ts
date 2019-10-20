import {Component} from '@angular/core';
import {ApiService} from '../api.service';
import {CustomerService} from '../customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  email = 'feroyan.hrant@gmail.com';
  password = 'asdasd';

  constructor(private api: ApiService, private customer: CustomerService, private router: Router) {
  }

  tryLogin() {
    this.api.login(
      this.email,
      this.password
    )
      .subscribe(
        res => {
          if (res.token) {
            this.customer.setToken(res.token);
            this.router.navigateByUrl('/dashboard');
          }
        },
        res => {
          alert(res.error.error);
        });
  }

}
