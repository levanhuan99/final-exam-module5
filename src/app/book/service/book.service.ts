import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Book} from '../interface/book';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private API_URL = 'http://localhost:3000/books';

  constructor(private http: HttpClient) {
  }

  getAllBooks(): Observable<Book> {
    return this.http.get<Book>(this.API_URL);
  }

  getBookById(id:number): Observable<Book> {
    return this.http.get<Book>(this.API_URL + '/' + id);
  }

  deleteBookById(id:number):Observable<Book> {
    return this.http.delete<Book>(this.API_URL+'/'+id);
  }
  updateBook(id:number,newBook:any):Observable<Book>{
    return this.http.put<Book>(this.API_URL+'/'+id,newBook);
  }
  createBook(newBook:any):Observable<Book>{
    return this.http.post<Book>(this.API_URL,newBook);

  }
}
