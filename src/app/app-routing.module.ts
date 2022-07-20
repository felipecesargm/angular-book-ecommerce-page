import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './skoob-store-app/components/login-page/login-page.component';
import { SkoobStoreAppComponent } from './skoob-store-app/skoob-store-app.component';

const routes: Routes = [
  {path: '', component: SkoobStoreAppComponent },
  {path: 'login', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
