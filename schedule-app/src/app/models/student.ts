import { Course } from './course';

export class Student {
    constructor(
        public id: string,
        public type: string,
        public term: string,
        public username: string,
        public name: string,
        public year: string,
        public majors: [string],
        public minors: [string],
        public graduationDate: string,
        public courses: [Course]
    ) { }
}
