import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debounceTime, Subject } from 'rxjs';

interface Book {
  id: string;
  title: string;
  image: string;
  description: string;
  category: string;
  author: string;
  price: number;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchTerm: string = '';
  searchResults: Book[] = [];
  books: Book[] = [];
  searchSubject: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('db.json').subscribe((data: any) => {
      this.books = data.books;
    }, (error: any) => {
      console.error(error);
    });

    this.searchSubject.pipe(debounceTime(300)).subscribe((searchTerm: string) => {
      this.searchBooks(searchTerm);
    });
  }

  searchBooks(searchTerm: string): void {
    this.searchResults = this.books.filter((book: Book) => {
      const titleMatch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
      const categoryMatch = book.category.toLowerCase().includes(searchTerm.toLowerCase());
      return titleMatch || categoryMatch;
    });
  }

  onSearchInput(searchTerm: string): void {
    this.searchSubject.next(searchTerm);
  }
}