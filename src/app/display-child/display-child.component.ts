import { Component, Input, OnInit } from '@angular/core';
import { Employee } from "../parent-component/parent-component.component"
@Component({
  selector: 'app-display-child',
  templateUrl: './display-child.component.html',
  styleUrls: ['./display-child.component.css']
})
export class DisplayChildComponent implements OnInit {

  @Input() 
  objects!:Array<any>;




  constructor() { 

  }

  getKeys(obj:any){
    return Object.keys(obj);
  }

  ngOnInit(): void {
    
  }

}
