import {Component, OnInit} from '@angular/core';
import {BookService} from '../service/book.service';
import {Book} from '../interface/book';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: any = [];
  numberOfBook = 0;

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.getAll();

  }
  getAll() {
    this.bookService.getAllBooks().subscribe((resp: Book) => {
      this.books = resp;
      let amountOfBook = 0;






      for (let i = 0; i < this.books.length; i++) {
        amountOfBook++;
      }
      this.numberOfBook = amountOfBook;

    });

  }

  deleteBook(id: number) {
    this.bookService.deleteBookById(id).subscribe((resp: Book) => {
      console.log(resp);
      this.getAll();
    });
  }

}

