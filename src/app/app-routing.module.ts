import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './rights/imprint/imprint.component';
import { MainContentComponent } from './main-content/main-content.component';
import { PrivacyPolicyComponent } from './rights/privacy-policy/privacy-policy.component';
import { MessageSentComponent } from './message-sent/message-sent.component';

const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'privacy', component: PrivacyPolicyComponent },
  { path: 'messageSent', component: MessageSentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
