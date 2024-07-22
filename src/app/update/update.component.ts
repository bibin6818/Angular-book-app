import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { bookModel } from '../book-model';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  books:bookModel={}
  constructor(private route:ActivatedRoute,private api:ApiService,private router:Router
  ){}
  ngOnInit():void{
this.route.params.subscribe((result:any)=>{
  // console.log(result);
  const {id} = result
  //api call
  this.getBooksDetails(id)
})
}
getBooksDetails(id:any){
  this.api.viewBookAPI(id).subscribe((result:any)=>{
    this.books = result
    console.log(this.books);
    
  })
}
cancel(booksid:any){
  this.getBooksDetails(booksid)
}
editBooks(){
  this.api.editBookAPI(this.books).subscribe((result:any)=>{
    alert("Book updated successfully")
    this.router.navigateByUrl("/")
  })
}

}
