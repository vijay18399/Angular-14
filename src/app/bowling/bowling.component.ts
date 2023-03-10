import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../shared/services/api.service';
import { UserModel } from './userModel';

@Component({
  selector: 'app-bowling',
  templateUrl: './bowling.component.html',
  styleUrls: ['./bowling.component.scss']
})
export class BowlingComponent implements OnInit {
  numArray: any = [];
  numValue: number;
  bowlArr: any = []
  sumArr: Array<any> = [];
  sumNum: number;
  clicks: number = 0;
  sumVal: number = 0;
  sum: number;
  sumNumber: any;
  sumArrNum: number;
  finalValue: any = [];
  maxValue: boolean = false;
  maxLength: number = 20;
  finalMaxValue: number;

  constructor(private formBuilder: FormBuilder,
    private api: ApiService) { }

  ngOnInit() {

    for(var i = 0; i <= 10; i++){
     this.numArray.push(i);
    }
    console.log(this.numArray);
    return this.numArray;
  }

  getNum(val: number){
    this.numValue = this.numArray[val];
    // console.log(this.bowlArr);
    if(this.bowlArr.length < this.maxLength){
      this.bowlArr.push(this.numValue);
      if(this.bowlArr.length%2==0){
        this.sumArr.length=0;
        this.finalValue.length=0;
        for(let i = 0; i < this.bowlArr.length; i+=2){
            this.sumVal = this.bowlArr[i] + this.bowlArr[i+1];
            this.sumArr.push(this.sumVal);
            var totalArray = this.sumArr.reduce((x, y) => x + y);
            this.finalValue.push(totalArray);   
          }
        }
      }
      
      if(this.bowlArr.length == this.maxLength){
        this.maxValue = true;
        this.finalMaxValue = Math.max(...this.finalValue);
      }    
  }



}
