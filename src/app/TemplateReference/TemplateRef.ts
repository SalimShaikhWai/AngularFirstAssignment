import { Component } from "@angular/core";

@Component({
    selector:"temple-ref",
    templateUrl:"./TemplateRef.html"
})

export class TemplateRef{
    name="Hello";
    getName(name:HTMLInputElement)
    {
        this.name=name.value;
    }
    getElemmentByEvent($event:any){
            this.name=$event.target.value;
    }   
    getNameByElement(id:string){
    console.log(id);
    let element=(<HTMLInputElement>document.getElementById(id));
  this.name=  element.value;
}

    
}
