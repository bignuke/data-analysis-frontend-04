import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StudentModule } from './student/student.module';
import { AppMaterialModule } from './app-material.module';
import { CourseModule } from './courses/courses.module';
import { FacultyModule } from './faculty/faculty.module';
import { GroupsModule } from './groups/group.module';
import { BadRequestModule } from './bad-request/bad-request.module';
import { SignInModule } from './sign-in/sign-in.module';
import { SearchModule } from './search/search.module';

import { AuthGuard } from './guards/auth.guard';

import { AuthService } from './services/auth.service';
import { EmitterService } from './services/emitter.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StudentModule,
    CourseModule,
    FacultyModule,
    GroupsModule,
    BadRequestModule,
    SignInModule,
    SearchModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    EmitterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
