import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../../services/master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginObj: any = {
    emailId: '',
    password: '',
  };

  masterSrv = inject(MasterService);
  router = inject(Router);

  onLogin() {
    console.log(this.loginObj);

    this.masterSrv.login(this.loginObj).subscribe((res) => {
      if (res.length > 0) {
        const user = res[0];

        if (user.result) {
          localStorage.setItem('ticketUser', JSON.stringify(user.data));
          this.router.navigateByUrl('/dashboard');
        } else {
          alert(user.message);
        }
      } else {
        alert('Invalid email or password');
      }
    });
  }
}
