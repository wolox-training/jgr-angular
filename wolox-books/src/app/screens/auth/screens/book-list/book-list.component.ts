import { Component, OnInit } from '@angular/core';
import  {BookService} from '../../../../services/book.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  public books = [];
  
  constructor(private http: HttpClient, private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(response=> {this.books = response});
  }
}
