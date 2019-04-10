import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { NoteInterface } from './../NoteInterface';

@Injectable()

export class NoteService {
    // subject: string;
    // date: Date;
    // message: string;
    noteModel: NoteInterface;
    noteSelected: NoteInterface;

    constructor(private http: HttpClient) { }

    getNotes():Observable<Object> {
        return this.http.get('http://localhost:8080/Notes/PastNotes');
    }

    deleteNote(id: string) {
        return this.http.delete(`http://localhost:8080/Notes/PastNotes/${id}`)
    }
}