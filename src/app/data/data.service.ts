import { Injectable } from '@angular/core';
import { employeeModel } from './employee.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http :HttpClient) {}
  getQualification(): Observable<string[]> {
    return of(['M.Tech', 'MCA', 'MBA', 'B.Tech', 'BCA', 'BBA']);
  }
  getExperience(): Observable<string[]> {
    return of(['Fresher', '1-Year', '2-Years', '3-Years', '4-Years', '5-Year & More']);
  }



}

