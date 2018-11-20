import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpAttendService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<any>('Employee_Attendance_API_URL')
      .toPromise()
      .then(res => <EmpAttend[]>res.data)
      .then(data => data);
  }

  getJSON(): Observable<any> {
    return this.http.get('../assets/fakeData/data.json');
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
