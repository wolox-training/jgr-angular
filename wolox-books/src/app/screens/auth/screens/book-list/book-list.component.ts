import { Component, OnInit } from '@angular/core';
import {BookService} from '../../../../services/book.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { BookState } from 'src/app/store/book.state';
import { Book } from './book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  public books: Observable<Book[]>;

  constructor(
    private bookService: BookService,
    private router: Router,
    private store: Store<BookState>
  ) {
    this.books = store.select('book');
  }

  ngOnInit() {
    this.bookService.getBooks().subscribe(response => {
      //this.books = response;
    });
  }

  getBookDetail(id: any) {
    this.router.navigate([`books/${id}`]);
  }

  removeBook() {

  };
}
