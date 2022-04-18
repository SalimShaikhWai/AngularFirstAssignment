import { Component } from "@angular/core";


@Component({
    selector:"Dynamic-Array",
    templateUrl:"./DynamicArrayComponents.html"
})
export class DynamicArrayComponents
{   show=false;
    names="Dynamic Component";
    City="";
    State="";
    Pincode !: number;
    address:Array<Address>=[];
    
    setCity(event:any)
    {
        this.City=event.target.value;
    }
    setState(event:any)
    {
        this.State=event.target.value;
    }
    setPincode(event:any)
    {
        this.Pincode=event.target.value;
    }



    addInObject()
    {
      let add =new Address(this.State,this.City,this.Pincode);
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
    Pincode:number;
    constructor(private _city: String,private _state:String,private _pincode:number)
    {
        this.City=_city;
        this.State=_state;
        this.Pincode=_pincode;
    }
    
}