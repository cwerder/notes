import { NoteInterface } from './../NoteInterface';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.less']
})

export class SideNavComponent {
    @Input() notesSideNav: NoteInterface[];
}