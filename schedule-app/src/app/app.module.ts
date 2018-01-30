import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EmitterService } from './services/emitter.service';
import { StudentModule } from './student/student.module';
import { AppMaterialModule } from './app-material.module';
import { CourseInformationComponent } from './course-information/course-information.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseInformationComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRoutingModule,
    StudentModule
  ],
  providers: [
    EmitterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
