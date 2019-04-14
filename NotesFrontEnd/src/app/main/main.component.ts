import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'main',
    templateUrl: 'main.component.html',
    styleUrls: ['main.component.less']
})

export class MainComponent {
    
    @Output() mainNotes = new EventEmitter<any>();
    
    public notesPass(notesList) {
        this.mainNotes.emit(notesList);
    }
}