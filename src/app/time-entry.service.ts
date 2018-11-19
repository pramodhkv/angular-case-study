import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class TimeEntryService {
    constructor(private http: Http) {}

    saveTimesheetEntries(timeEntries: any[]) {
       return this.http.post('http://localhost:3001/data/test.json', timeEntries);
    }
}