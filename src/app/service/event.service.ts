import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.url + '/events');
  }

  deleteEvent(name: string): Observable<any> {
    return this.http.delete(this.url + '/events/' + name, {responseType: 'text'})
  }

  addEvent(event: Event): Observable<any> {
    return this.http.post(this.url + '/events', event, {responseType: 'text'}) ;
  }

  getEvent(name: string): Observable<any> {
    return this.http.get(this.url + '/events/' + name);
  }

  editEvent(name: string, event: Event): Observable<any> {
    return this.http.put(this.url + '/events/' + name, event, {responseType: 'text'});
  }
}