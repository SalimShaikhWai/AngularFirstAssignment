import { Component } from "@angular/core";


@Component({
    selector:"Dynamic-Array",
    templateUrl:"./DynamicArrayComponents.html"
})
export class DynamicArrayComponents
{   show=false;
    names="Dynamic Component";
    address:Array<Address>=[];
    
    addInObject(city:string,state:string,pincode:string)
    {
      let add =new Address(state,city,pincode);
      this.address[this.address.length]=add;
    
    }

    showAllObject()
    {
       
        if(this.show)
        {
            this.show=false;
        }
        else{
            this.show=true;
        }
    }

}
class Address{
   
    public City:String;
    State:String; 
    Pincode:String;
    constructor(private _city: String,private _state:String,private _pincode:string)
    {
        this.City=_city;
        this.State=_state;
        this.Pincode=_pincode;
    }
    
}