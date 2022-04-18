import { Component } from "@angular/core";

@Component({
    selector:"first-component",
    templateUrl:"./component1.html",
    

})

export class Component1{
    name="Wai Technologies";
     names:Array<string>=["salim","alam","adil","prakash"];
    
    obj = new Address("Pathardi","Maharashtra",414505)
    // obj1=new Address("Pune","Maharashtra",450505);
    // obj2=new Address("Nashik","Maharashtra",545450);
    // obj3=new Address("Surat","Gujarat",123432);

  // Addreess:Array<Address>=[this.obj,this.obj1,this.obj2,this.obj3];
   Addreess:Array<Address>=[new Address("Pathardi","Maharashtra",414505),
   new Address("Pune","Maharashtra",450505),new Address("Nashik","Maharashtra",545450),
   new Address("Surat","Gujarat",123432)];


     setCity(event:any)
     {
         this.obj.city=event.target.value;
         event.style.dackgrounColor="red";
         console.log(event);
        
     }
     setPincode(event:any)
     {

        this.obj.Pincode=event.target.value;   
     }
     setState(event:any)
     {
        this.obj.city=event.target.value;   
     }

     setSateUsingDrop(event:any)
     {
        this.obj.State=event.target.value; 
     }


    }
   
   class Address{
    public get city(): string {
        return this._city;
    }
    public set city(value: string) {
        this._city = value;
    }
    
    public City:string;
    State:string; 
    Pincode:number;
    constructor(private _city: string,private _state:string,private _pincode:number)
    {
        this.City=_city;
        this.State=_state;
        this.Pincode=_pincode;
    }
    
}