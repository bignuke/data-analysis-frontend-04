import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Student } from '../models/student';
import 'rxjs/add/operator/catch';

@Injectable()
export class StudentService {
  private domainUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getStudentTermInfo(username: String, term: String): Observable<Student> {
    const url = `${this.domainUrl}/student/${username}/${term}`;
    return this.http.get<Student>(url)
      .catch((error: any) =>
        Observable.throw(error.json().error || 'Server error'));
  }

  getCourseTakenInfo(course: String, term: String): Observable<[Student]> {
    const url = `${this.domainUrl}/courses/${course}/students/taken/${term}`;
    return this.http.get<Student>(url)
      .catch((error: any) =>
        Observable.throw(error.json().error || 'Server error'));
  }

  getCourseNotTakenInfo(course: String, term: String): Observable<[Student]> {
    const url = `${this.domainUrl}/courses/${course}/students/not-taken/${term}`;
    return this.http.get<Student>(url)
      .catch((error: any) =>
        Observable.throw(error.json().error || 'Server error'));
  }

}
