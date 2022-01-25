import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['../login/login.page.scss'],
})
export class SignUpPage implements OnInit {
  userName = '';
  userEmail = '';
  userPassword = '';

  constructor(private router: Router) {}

  ngOnInit() {}

  public signUp() {
    console.log(this.userName + this.userEmail + this.userPassword);

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.userEmail, this.userPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  }
}
