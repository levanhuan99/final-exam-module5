import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BookService} from '../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Book} from '../interface/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  detailBookForm: FormGroup;

  constructor(private bookService: BookService,
              private route: ActivatedRoute, private fb: FormBuilder,private router:Router) {

  }

  ngOnInit(): void {
    this.detailBookForm = this.fb.group({
      title: [''],
      author: [''],
      description: ['']
    });
    console.log(this.id);

    this.findById();

  }

  id = +this.route.snapshot.paramMap.get('id');

  findById() {
    this.bookService.getBookById(this.id).subscribe((resp: Book) => {
      console.log(resp);
      this.detailBookForm.patchValue(resp);
    });
  }
  backToList(){
    this.router.navigate(['books']);
  }

}
