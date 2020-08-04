import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BookService} from '../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Book} from '../interface/book';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  bookEditForm: FormGroup;

  constructor(private bookService: BookService, private route: ActivatedRoute, private fb: FormBuilder, private router: Router) {
  }

  id=+this.route.snapshot.paramMap.get('id');
  ngOnInit(): void {
    this.bookEditForm = this.fb.group({
      title: [''],
      author: [''],
      description: ['']
    });
    console.log(this.id);

    this.findById();
  }
  findById() {
    this.bookService.getBookById(this.id).subscribe((resp: Book) => {
      console.log(resp);
      this.bookEditForm.patchValue(resp);
    });
  }
  backToList(){
    this.router.navigate(['books']);
  }
  update(){
    let book=this.bookEditForm.value
    this.bookService.updateBook(this.id,book).subscribe((resp:Book)=>{
      console.log(resp);
      this.router.navigate(['books']);

    })

  }



}
