import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent {
  book:any = {}
  constructor(private route:ActivatedRoute,private api:ApiService){}
  ngOnInit():void{
    this.route.params.subscribe((result:any)=>{
      const {id} = result
      console.log(id);
      this.getBookDetails(id)
    })
  }

  getBookDetails(pid:any){
    this.api.viewBookAPI(pid).subscribe((result:any)=>{
      this.book = result
      console.log(this.book);
    })
  }
}
