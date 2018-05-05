import { Component, OnInit } from '@angular/core';
import{FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';


@Component({
  selector: 'app-my-first-program',
  templateUrl: './my-first-program.component.html',
  styleUrls: ['./my-first-program.component.css']
})
export class MyFirstProgramComponent implements OnInit {
  private frm:FormGroup;
  private patients:FormArray;
  

  constructor(private fromB:FormBuilder) { }

  ngOnInit() {
    this.frm=this.fromB.group({
      FirstName:['',[Validators.required]],
      
      speciality:[''],
      patients:this.fromB.array([this.createFrom()])

    });
  }
  saveDoc(){
    console.log(this.frm.value)
  }
    createFrom(){
      return this.fromB.group({
        pname:[''],
        desease:['']
      })

      }
       
      addPatients(){
        var items=this.frm.get("patients") as FormArray;
        items.push(this.createFrom());
      }

    }

