import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './component/account/account/account.component';
import { SignupComponent } from './component/signup/signup/signup.component';
import { LoginComponent } from './component/login/login/login.component';
import { StudentComponent } from './component/student/student/student.component';
import { LecturerComponent } from './component/lecturer/lecturer/lecturer.component';
import { HomeComponent } from './component/home/home/home.component';
import { TopicListComponent } from './component/topic-list/topic-list/topic-list.component';
import { ResultComponent } from './component/result/result/result.component';
import { ProgressComponent } from './component/progress/progress/progress.component';
import { NotificationComponent } from './component/notification/notification/notification.component';
import { OutlineComponent } from './component/outline/outline/outline.component';
import { TopicRegistrationComponent } from './component/topic-registration/topic-registration/topic-registration.component';
import { CouncilComponent } from './component/council/council/council.component';
import { ResearchDirectionComponent } from './component/research-direction/research-direction/research-direction.component';



@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    SignupComponent,
    LoginComponent,
    StudentComponent,
    LecturerComponent,
    HomeComponent,
    TopicListComponent,
    ResultComponent,
    ProgressComponent,
    NotificationComponent,
    OutlineComponent,
    TopicRegistrationComponent,
    CouncilComponent,
    ResearchDirectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
