import { Component, OnInit } from '@angular/core';

import {FormControl} from '@angular/forms';
import { Activity } from './activity.model';

@Component({
  selector: 'app-work-area',
  templateUrl: './work-area.component.html',
  styleUrls: ['./work-area.component.css']
})
export class WorkAreaComponent implements OnInit {

  date = new FormControl(new Date());

  activities: Activity[] = [
    new Activity("Development", 1),
    new Activity("Client Meeting", 2),
    new Activity("Demo", 3),
    new Activity("Testing", 4),
    new Activity("Documentation", 5),
    new Activity("Code Review", 6),
    new Activity("Session", 7),
    new Activity("Deployment", 8),
    new Activity("Management Activity", 9),
    new Activity("Production Support", 10),
  ];

  projects: Activity[] = [
    new Activity("Spectra Labs", 1),
    new Activity("Symfonie", 2),
    new Activity("BMW EFA", 3),
    new Activity("BMW CASA", 4),
    new Activity("BMW ISPA Trac Zentral", 5),
    new Activity("BMW IVS-R", 6)
  ];

  constructor() { }

  ngOnInit() {
  }


}
