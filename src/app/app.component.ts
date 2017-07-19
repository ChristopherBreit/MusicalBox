import { Component, OnInit } from '@angular/core';
import { MusicalBox } from './util';
import { Observable } from 'rxjs';
import { DatabaseService } from './database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public box = this.getNewBox();
  public boxDisabled = false;

  public $myMusicalBoxList: Observable<Array<MusicalBox>>;
  public $publicMusicalBoxList: Observable<Array<MusicalBox>>;
  
  constructor(
    private databaseService: DatabaseService
  ){}

  ngOnInit() {
    this.$myMusicalBoxList = this.databaseService.$myMusicalBoxList();
    this.$publicMusicalBoxList = this.databaseService.$publicMusicalBoxList();
  }

  private getNewBox(): MusicalBox {
    return {
      name: "My Musical Box",
      public: true,
      data: new Array(10).fill(new Array(40).fill(false)),
      id: null
    }
  }

  // Save new NewBox to DB
  public updateBox(newBox) {
    this.databaseService.$updateBox(newBox).subscribe((response: any)=>{
      if(response.success) {
        this.box = response.success.box;
      } else {
        console.log(response);
      }
    })
  }

  // Create a new box and save it to DB
  public addBox() {
    let newBox = this.getNewBox();
    this.databaseService.$addBox(newBox).subscribe((response: any)=>{
      if(response.success) {
        this.box = response.success.box;
      } else {
        console.log(response);
      }
    })
  }

  public selectMyBox(box){
    this.box = box;
    this.boxDisabled = false;
  }

  public selectPublicBox(box){
    this.box = box;
    this.boxDisabled = true;
  }
}
