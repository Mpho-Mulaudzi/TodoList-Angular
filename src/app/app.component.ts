import { Component } from '@angular/core';
import {ToDo} from "./ToDo";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoList-angular';

  todoValue :string = "";
  list:ToDo[] =[];
  
  //lifeCycle hook
  ngOnInit(): void {
    this.list = [];
    this.todoValue=""
    
  }

  //add functionality

  addItem = ()=>{
    if(this.todoValue !=="")
     {//set object of type ToDo
        const newItem:ToDo= {
          id:Date.now(),
          value:this.todoValue,
          isDone:false
        }
        //add object to list array
        this.list.push(newItem);
        this.todoValue="";
     }

  }

  deleteItem =(id:number)=>{
      this.list= this.list.filter((item)=> item.id !==id);
  }



}
