import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { bookModel } from '../book-model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  constructor(private api: ApiService) { }

  books: bookModel = {}

  onSubmit(bookForm: NgForm) {
    if (bookForm.valid) {
      alert('Form submitted successfully!');
      // Handle the form submission, e.g., send data to the server
    } 
  }

  onCancel(bookForm: NgForm) {
    // Clear the form or handle cancellation
    bookForm.resetForm();
    alert('Form reset!');
  }

 //save book
  saveBook(){
    this.api.addBooksAPI(this.books).subscribe({
      
      next:(res:any)=>{
        console.log(res)
      },
      error:(err:any)=>{
        console.log(err)
      }

    })  
  }

 

}
