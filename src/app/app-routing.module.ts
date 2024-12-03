import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './component/account/account/account.component';
import { CouncilComponent } from './component/council/council/council.component';

import { HomeComponent } from './component/home/home/home.component';
import { LecturerComponent } from './component/lecturer/lecturer/lecturer.component';
import { LoginComponent } from './component/login/login/login.component';
import { NotificationComponent } from './component/notification/notification/notification.component';
import { OutlineComponent } from './component/outline/outline/outline.component';
import { ProgressComponent } from './component/progress/progress/progress.component';
import { ResearchDirectionComponent } from './component/research-direction/research-direction/research-direction.component';
import { ResultComponent } from './component/result/result/result.component';
import { SignupComponent } from './component/signup/signup/signup.component';
import { StudentComponent } from './component/student/student/student.component';
import { TopicListComponent } from './component/topic-list/topic-list/topic-list.component';
import { TopicRegistrationComponent } from './component/topic-registration/topic-registration/topic-registration.component';
import { AuthGuard } from './services/auth.guard';

//,canActivate: [AuthGuard]
export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
   {path:'login', component:LoginComponent},
   {path:'signup', component:SignupComponent},
  {path:'notification',component:NotificationComponent},
   {path:'student', component: StudentComponent},
   {path:'lecturer', component: LecturerComponent},
   {path:'topic-list', component:TopicListComponent},
   {path:'progress', component:ProgressComponent},
   {path:'result', component:ResultComponent},
  {path:'home', component: HomeComponent},
  {path:'account', component:AccountComponent},
  {path:'outline', component:OutlineComponent},
  {path:'topic-registration', component:TopicRegistrationComponent},
  {path:'council', component:CouncilComponent},
  {path:'research-direction', component:ResearchDirectionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
