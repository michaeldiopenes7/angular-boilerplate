import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  todoItem = new FormControl("");
  todoList: string[] = []

  pushItemToList() {

    if (!this.todoItem.value){
      alert("Please Enter Something huhuh");
      return;
    }

    if( this.todoItem.valid){
      this.todoList.push(this.todoItem.value as string);

      this.todoItem.setValue('');
    }
    
  }
}