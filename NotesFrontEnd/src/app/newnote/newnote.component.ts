import { Component, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { NoteService } from '../services/Note.service';
import { NoteInterface } from './../NoteInterface';

@Component({
    selector: "newnote",
    templateUrl: "./newnote.component.html",
    styleUrls: ["./newnote.component.less"]
})

export class NewNoteComponent {

    notes: NoteInterface[];

    public message: string;

    @Input() public chosenNote: NoteInterface;
    public krillin = {a: '1', b: '2'};
    
    constructor(private noteService: NoteService) { }

    @Output() notePosted = new EventEmitter<any>();

    public submitNote(note: FormGroup) {
        this.noteService.addNote(note.value).subscribe(res => {
            console.log('Note added '+ res);
            this.noteService.getNotes().subscribe(result => {
                this.notes = Object.keys(result).map(keys => result[keys]);
                this.notePosted.emit(this.notes);
            });
        });
    }

    clicker() {
        console.log(this.chosenNote);
        console.log(this.chosenNote.subject);
    }
}