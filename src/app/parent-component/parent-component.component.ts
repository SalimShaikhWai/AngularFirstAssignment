import { Component, OnInit } from '@angular/core';
import { Book, Pizza } from './Book';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {
 public  employees!:Array<Employee>;
  books:Array<Book>=new Array();
  pizzes:Array<Pizza>=new Array();

  dummyEmployee=new Employee(1,"sdd",2323);
  dummyBook=new Book("title","sdd");
  dummyPizza=new Pizza("ds",12,"2");

  constructor() {
   

   }

  ngOnInit(): void {
 

  }


  addbooks($event:any)
  {
    
    let title=$event.target['bookTitle'].value;
    let name=$event.target['bookname'].value;
    let book=new Book(title,name);
    this.books.push(book);
    return false;
  }
addPizza($event:any)
{
  alert("com=")
  let pizzaName=$event.target['pizzaName'].value;
  let pizzaType=$event.target['pizzaType'].value;
  let pizzaPrice=$event.target['pizzaPrice'].value;
  let pizza=new Pizza(pizzaName,pizzaPrice,pizzaType)
  this.pizzes.push(pizza);
}
  addEmployee($event:any)
  {
    
    let empId=$event.target['_empId'].value;
    let name=$event.target['_name'].value;
    let salary=$event.target['_salary'].value;
    let employee=new Employee(empId,name,salary);
    
    
    console.log( empId)
   this.employees.push(employee);
   //this.employees[this.employees.length]=(employee);
    return false;
  } 

  showEmployee(){
    console.log(this.employees);
  }
}

export class Employee{
  public get salary(): number {
    return this._salary;
  }
  public set salary(value: number) {
    this._salary = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  public get empId(): number {
    return this._empId;
  }
  public set empId(value: number) {
    this._empId = value;
  }
  constructor(private _empId: number,private _name: string,private _salary: number)
  {

  }
}
