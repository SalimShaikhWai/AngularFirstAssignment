import { escapeIdentifier } from "@angular/compiler/src/output/abstract_emitter";
import { Component } from "@angular/core";

import { ToastrService } from 'ngx-toastr';



@Component({
    selector:"login-Component",
    templateUrl:'./LoginComponent.html'
})
export class LoginComponent
{  
     userError=false;
    passwordError=false;
    disabledButton=true;
   
    map = new Map();
    constructor(private toastr: ToastrService)
    {
        this.map.set("Salim","Alam");
        this.map.set("Alam","Salim");
        this.map.set("Adil","Adil");
    }
    

    checkUsername($event:any)
    {
        let username=$event.target.value;
       // console.log(username);
        if(username.length<4 || username.length>10 || !/^[a-zA-Z]+$/.test(username)  )
        {
            this.userError=true;
           this.disabledButton=true;
           this.toastr.error('Username should be more then 4 letter and less than 10 letter', 'Error!',{
               timeOut:1000,
               easing:'ease-in',
               easeTime:1000,
               positionClass:'toast-top-center',
           });
        }
        else{
            this.userError=false;
            this.disabledButton=false;
          
        }
    }
    

    checkPassword($event:any){
        let password=$event.target.value;
        if(password.length<4 || password.length>10 || !/^[a-zA-Z0-9]+$/.test(password))
        {
            this.passwordError=true;
            this.toastr.error('password should be more then 4 letter and less than 10 letter', 'Error!',{
                timeOut:1000,
                easing:'linear',
                positionClass:'toast-top-center',
            });
        }
        else{
            this.passwordError=false;
           
        }
    }


    validated(username:string,password:string)
    {
        if(!this.userError || !this.passwordError)
        {
                this.map.forEach((value,key)=>{
                if(key==username && value==password)
                {       
                    // alert("Successfully Done");
                     this.disabledButton=true;
                     this.toastr.success('Successfully Match', 'Success!',{
                        timeOut:1000,
                        easing:'linear',
                        positionClass:'toast-top-center',
                    });
                }
            });         
                  
        }
        else{
           // alert("UserName and Password Should be in format");
            this.disabledButton=true;
        
        }
    }

    reset(username:HTMLInputElement,password:HTMLInputElement)
    {
       this. userError=false;
       this. passwordError=false;
       this. disabledButton=true;
       username.value="";
       password.value="";
    }

}


class User{

    Username!:string;
    Password!:string;
    constructor(username:string,password:string)
    {
        this.Username=username;
        this.Password=password;
    }

}