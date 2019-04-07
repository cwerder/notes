import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/Note.service';

@Component({
    selector: "pastnote",
    templateUrl: "./pastnote.component.html",
    styleUrls: ["./pastnote.component.less"]
})

export class PastNoteComponent implements OnInit { 

    // pastNotes: NoteService;
    constructor(private pastNotes: NoteService) { }

    ngOnInit() {
        console.log('this is ' + this);
        this.pastNotes.getNotes().subscribe(result => {
            console.log(result);
        })
    }
}