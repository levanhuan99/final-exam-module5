import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BookService} from '../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Book} from '../interface/book';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  bookAddForm:FormGroup;

  constructor(private bookService: BookService, private route: ActivatedRoute,
              private fb: FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.bookAddForm = this.fb.group({
      title: [''],
      author: [''],
      description: ['']
    });
  }
  backToList(){
    this.router.navigate(['books']);
  }
  addANewBook(){
    let newBook=this.bookAddForm.value;
    this.bookService.createBook(newBook).subscribe((resp:Book)=>{
      console.log(resp);
      this.router.navigate(['books']);
    })
  }


}
