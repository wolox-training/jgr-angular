import { Component, OnInit } from '@angular/core';
import  {BookService} from '../../../../services/book.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  public books = [];
  
  constructor(private http: HttpClient, private bookService: BookService, private router: Router) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(response=> {this.books = response});
  }

  getBookDetail() {
    this.bookService.getBookById(18).subscribe(response=> {console.log(response)});
    this.router.navigate(['books/:id']);
  }
}
