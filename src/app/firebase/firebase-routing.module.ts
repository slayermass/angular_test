import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FirebaseComponent} from './firebase.component';
import {TestComponent} from './test/test.component';

const routes: Routes = [
  {
    path: 'firebase', component: FirebaseComponent, children: [
      {
        path: 'test', component: TestComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class FirebaseRoutingModule {}
