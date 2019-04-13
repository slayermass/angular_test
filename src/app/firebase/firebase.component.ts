import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MessageModel} from '../common/message.model';

@Component({
  selector: 'app-test',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {
  form: FormGroup;
  message: MessageModel;

  constructor(public authService: AuthService) {}

  // signup() {
  //   this.authService.signup(this.email, this.password);
  //   this.email = this.password = '';
  // }

  login() {
    this.authService.login(this.form.value.email, this.form.value.password)
      .then((data) => {
        console.log('Nice, it worked!', data);
      })
      .catch(err => {
        this.showMessage(err.message);
        console.log('Something went wrong:', err);
      });
    // this.form.reset();
  }

  logout() {
    this.authService.logout();
    this.form.reset();
  }

  showMessage(text: string, type: string = 'danger') {
    this.message = new MessageModel(type, text);
    setTimeout(() => {
      this.message = null;
    }, 3000);
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
}
