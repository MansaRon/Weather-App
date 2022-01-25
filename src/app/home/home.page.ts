import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    const auth = getAuth();
    const check = auth.currentUser;
    console.log(check);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        this.router.navigateByUrl('/login');
      }
    });
  }

  public logOut(): void {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      this.router.navigateByUrl('/login');
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
  }
}
