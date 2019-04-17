import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FirebaseRoutingModule} from './firebase-routing.module';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { TestComponent } from './test/test.component';

@NgModule({
  imports: [
    CommonModule,
    FirebaseRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: environment.firebase.apiKey,
      authDomain: environment.firebase.authDomain,
      databaseURL: environment.firebase.databaseURL,
      storageBucket: environment.firebase.storageBucket,
      messagingSenderId: environment.firebase.messagingSenderId,
    }),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  declarations: [TestComponent]
})
export class FirebaseModule {}
