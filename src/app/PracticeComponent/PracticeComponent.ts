import { Component } from "@angular/core";

@Component({
    selector:"practice",
    templateUrl:'./PracticeComponent.html'
})
export class PracticeComponent{
    names="practice ";
    usernameError=false;
    passwordError=false;
    disabldButton=true;
    pass="password";
    checkName(username:string){
        if(username.length<4 || username.length>10)
        {
            this.usernameError=true;
        }
        else{
            this.usernameError=false;
            this.disabldButton=false;
        }
    }

    checkPassword(password:string){
        if(password.length<4 || password.length>10)
        {
            this.passwordError=true;
        }
        else{
            this.passwordError=false;
        }
    }
    reset(username:HTMLInputElement,password:HTMLInputElement)
    {
        this.usernameError=false;
    this.passwordError=false;
    this.disabldButton=true;
    username.value="";
    password.value="";
    }

}