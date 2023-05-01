import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LandingComponent } from './landing/landing.component';
import { LayoutComponent } from './layout/layout.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { AuthGuardGuard } from './auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: LandingComponent, canActivate: [AuthGuardGuard]
      },
      {
        path: 'login',
        component: LoginComponent, canActivate: [AuthGuardGuard]
      },
      {
        path: 'sign-up',
        component: SignUpComponent, canActivate: [AuthGuardGuard]
      },
      { path: 'chatroom',
        component: ChatroomComponent, canActivate: [AuthGuardGuard]
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
