import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userEmail = '';
  userPassword = '';

  constructor(private router: Router) {}

  ngOnInit() {}

  public login() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.userEmail, this.userPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        this.router.navigateByUrl('/home');
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
}
