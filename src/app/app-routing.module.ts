import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './rights/imprint/imprint.component';
import { MainContentComponent } from './main-content/main-content.component';
import { PrivacyPolicyComponent } from './rights/privacy-policy/privacy-policy.component';

const routes: Routes = [
  { path: '', component: MainContentComponent }, 
  { path: 'imprint', component: ImprintComponent }, 
  { path: 'privacy', component: PrivacyPolicyComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
