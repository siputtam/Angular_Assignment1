import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';
import { NgForm, FormControl } from '@angular/forms';
import { employeeModel } from '../data/employee.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  originalemployee : employeeModel = {
    firstname: null,
    lastname:null,
    emailAddress:null,
    contact:null,
    address:null,
    username:null,
    userpwd:null,
    gender:null,
    qualification:null,
    experience:null,
    Clanguages:[]


  };
  employee : employeeModel={...this.originalemployee};
  qualification: Observable<string[]>;
  experience: Observable<string[]>;
  languages:string[];



  constructor(private dataService:DataService) { }

  ngOnInit(){
    this.qualification=this.dataService.getQualification();
    this.experience=this.dataService.getExperience();
    this.languages=['C', 'Java', 'CSharp', 'PHP', 'Python'];
   }


  onSubmit(form : NgForm){
    console.log('in onSubmit:' , form.valid);
    if(form.value.C==true){
      this.employee.Clanguages.push("C/C++");
    }
    if(form.value.Java==true){
      this.employee.Clanguages.push("Java");
    }
    if(form.value.CSharp==true){
      this.employee.Clanguages.push("C#");
    }
    if(form.value.PHP==true){
      this.employee.Clanguages.push("PHP");
    }
    if(form.value.Python==true){
      this.employee.Clanguages.push("Python");
    }
    if(form.valid){
    console.log(this.employee);
    }
  }

}

