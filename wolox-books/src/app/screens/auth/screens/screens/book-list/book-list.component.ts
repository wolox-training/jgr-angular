import { Component, OnInit } from '@angular/core';
import  {BookService} from '../../../../../services/book.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  bookName: string = 'Nombre del libro';
  authName: string = 'Autor del libro';
  bookImg: any = '';
  books: Observable <any>;

  constructor(private http: HttpClient, private bookService: BookService) { }

  ngOnInit() {
    this.books = this.bookService.getCollection();
  }
}
