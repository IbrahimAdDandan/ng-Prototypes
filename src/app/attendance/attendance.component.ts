import { Component, OnInit } from '@angular/core';
import { EmpAttendService } from '../emp-attend.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.sass']
})
export class AttendanceComponent implements OnInit {

  // constructor() { }

  attend: EmpAttend[];

  cols: any[];

  Attendance: SelectItem[];

  dayTypes: SelectItem[];


  yearFilter: number;

  yearTimeout: any;

  constructor(private empAttendService: EmpAttendService) { }

  ngOnInit() {
    // this.empAttendService.getData().then(attends => this.attend = attends).catch(err => console.log(err));
    this.empAttendService.getJSON().subscribe(attends => this.attend = attends.data);
    this.Attendance = [
      { label: 'Leave', value: 'Leave' },
      { label: 'Presence', value: 'Presence' }
    ];

    this.dayTypes = [
      { label: 'All types', value: null },
      { label: 'Rest day', value: 'rest day' },
      { label: 'Work day', value: 'work day' }
    ];

    this.cols = [
      { field: 'Date', header: 'Date' },
      { field: 'year', header: 'Year' },
      { field: 'DayType', header: 'Day Type' },
      { field: 'Attendance', header: 'Attendance' },
      { field: 'WorkHours', header: 'Work Hours' },
      { field: 'LateAmmount', header: 'Late Ammount' }
    ];
  }

  onYearChange(event, dt) {
    if (this.yearTimeout) {
      clearTimeout(this.yearTimeout);
    }

    this.yearTimeout = setTimeout(() => {
      dt.filter(event.value, 'year', 'gt');
    }, 250);
  }

}

interface EmpAttend {
  dayDate: String;
  dayType: String;
  attendance: String;
  workHours: String;
  lateAmmount: String;
  year: Number;
}
