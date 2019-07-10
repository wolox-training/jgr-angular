import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { Book } from '../book-list/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  public book: Book;

  constructor( private router: Router, private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBookById(18).subscribe(response=> {
      console.log(response),
      this.book = response
    });;
    //console.log(this.book.author);
    //.subscribe(response=> {console.log(response)});
  }

  toBookList() {
    this.router.navigate(['books']);
  }

}
