import { Component, OnInit } from '@angular/core';
import { Toast, ToastrComponentlessModule, ToastrService } from 'ngx-toastr';
import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-listar-events',
  templateUrl: './listar-events.component.html',
  styleUrls: ['./listar-events.component.css']
})
export class ListarEventsComponent implements OnInit {
  listEvents: Event[] = [];

  constructor(private _eventService: EventService,
        private toastr: ToastrService) { }
  
  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    this._eventService.getEvents().subscribe(data => {
      console.log(data);
      this.listEvents = data;
    }, error => {
      console.log(error);
    })
    // console.log();
    
  }

  deleteEvent(name: string) {
    this._eventService.deleteEvent(name).subscribe(data => {
      this.toastr.error('Event ha estat eliminat amb exit', 'Event eliminat');
      this.getEvents();
    }, error => {
      console.log(error);
    })
  }
}