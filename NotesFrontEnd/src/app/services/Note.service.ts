import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()

export class NoteService {
    subject: string;
    date: Date;
    message: string;

    constructor(private http: HttpClient) { }

    getNotes():Observable<Object> {
        return this.http.get('http://localhost:8080/Notes/PastNotes');
    }
}