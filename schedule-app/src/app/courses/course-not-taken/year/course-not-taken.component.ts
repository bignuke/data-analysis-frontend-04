import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from '../../../services/course.service';
import { StudentInfo } from '../../../models/student-info';

@Component({
    selector: 'app-course-not-taken-year',
    templateUrl: './course-not-taken.component.html',
    styleUrls: ['./course-not-taken.component.css']
})
export class CourseNotTakenYearComponent implements OnInit {

    course: String;
    year: String;
    students: StudentInfo[];
    amount: number;
    radioVals = ['All', 'Y1', 'Y2', 'Y3', 'Y4', 'Y5', 'Y6'];

    constructor(private courseService: CourseService,
        private router: Router,
        private route: ActivatedRoute) {
    }

    loadStudents() {
        this.courseService.getCourseNotTakenInfoYear(this.course, this.year)
            .subscribe(students => {
                this.students = students;
                this.amount = students.length;
            });
    }

    isCurrentRoute(value) {
        return this.year === value.toString().substring(1);
    }

    switchYear(value) {
        if (value === 'All') {
            this.router.navigate(['/course', this.course, 'students-not-taken', 'all']);
        } else {
            const val = value.toString().substring(1);
            this.router.navigate(['/course', this.course, 'students-not-taken', val]);
        }
    }

    switchView() {
        this.router.navigate(['/course', this.course, 'students-taken', this.year]);
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.course = params['name'];
            this.year = params['year'];
            this.loadStudents();
        });
    }
}
