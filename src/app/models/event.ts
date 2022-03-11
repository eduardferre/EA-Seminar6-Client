export class Event {
    _id?: number;
    id: string;
    name: string;
    place: string;
    eventDate: string;

    constructor(id: string, name: string, place: string, eventDate: string) {
        this.id = id;
        this.name = name;
        this.place = place;
        this.eventDate = eventDate;
    }   
}