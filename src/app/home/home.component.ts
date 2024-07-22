import { Component,OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allBooks:any = []
  searchKey:string = ""
  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.getAllBooks()
  }

  getAllBooks(){
     this.api.getBooksAPI().subscribe((result:any)=>{
     this.allBooks = result
     console.log(result);
     })
  }

  removeBook(bookId:any){
    this.api.removeBookAPI(bookId).subscribe((result:any)=>{
      this.getAllBooks()

    })
  }

  SortByTitle(){
    this.allBooks.sort((book1:any,book2:any)=>book1.title.localeCompare(book2.title))
  }

  SortByID(){
    this.allBooks.sort((book1:any,book2:any)=>book1.id.localeCompare(book2.id))
  }
}



