import { Component } from '@angular/core';

@Component({
    selector: 'app-bad-request',
    templateUrl: './bad-request.component.html',
    styleUrls: ['./bad-request.component.css']
})
export class BadRequestComponent {
    previousUrl: string;

    constructor() { }

}
