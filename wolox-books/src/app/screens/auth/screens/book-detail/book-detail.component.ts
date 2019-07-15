import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { Book } from '../book-list/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  public book: Book;
  id: any;

  constructor(
    private router: Router,
    private bookService: BookService,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.actRoute.params.subscribe(res => this.id = res.id);
    this.bookService.getBookById(this.id).subscribe(response => this.book = response);
  }

  toBookList() {
    this.router.navigate(['books']);
  }
}
