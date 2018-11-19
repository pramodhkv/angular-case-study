import { Component, OnInit, ViewChild } from '@angular/core';

import {FormControl, NgForm} from '@angular/forms';
import { Activity } from './activity.model';
import { TimeEntryService } from '../time-entry.service';
import { WorkAreaDetail } from './work-area-detail.model';

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

  time = {hour: 7, minute: 0};

  @ViewChild('workAreaForm') workAreaFormData: NgForm;

  workAreaDetailArr: WorkAreaDetail[];

  timeEntriesArray = [];

  workItemAdded = false;
  dataSaved = false;
  errorOccurred = false;

  constructor(private timeEntryService: TimeEntryService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.timeEntriesArray);

    this.workItemAdded = true;
    let hourTime = this.workAreaFormData.value.time.hour;
    let minuteTime = this.workAreaFormData.value.time.minute;
    if (hourTime < 10) {
      hourTime = '0' + hourTime;
    }
    if (minuteTime < 10) {
      minuteTime = '0' + minuteTime;
    }

    let formData = this.workAreaFormData.value;
    let workAreaDetailObj = new WorkAreaDetail(
      formData.activity,
      formData.project,
      formData.additionalInfo,
      formData.time,
      formData.datefield,
      hourTime + ':' + minuteTime
    );
    this.timeEntriesArray.push({workAreaDetailObj});
  }

  onSaveData() {
    console.log(this.timeEntriesArray);
    this.timeEntryService.saveTimesheetEntries(this.timeEntriesArray)
    .subscribe(
      (response) => {
        this.dataSaved = true;
        console.log(response);
      },
      (error) => {
        this.errorOccurred = true;
        console.log(error);
      }
    );
  }


}
