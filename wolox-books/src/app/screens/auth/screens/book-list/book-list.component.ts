import { Component, OnInit } from '@angular/core';
import  {BookService} from '../../../../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  public books = [];
  
  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(response=> {this.books = response});
  }

  getBookDetail(id: any) {
    this.router.navigate([`books/${id}`]);
  }
}
