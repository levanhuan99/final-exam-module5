import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookListComponent} from './book-list/book-list.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { BookAddComponent } from './book-add/book-add.component';
import { BookEditComponent } from './book-edit/book-edit.component';


const routes: Routes = [
  {path: '', component: BookListComponent},
  {path: ':id/bookDetail', component: BookDetailComponent},
  {path: ':id/editDetail', component: BookEditComponent},
  {path: 'add', component: BookAddComponent}
];

@NgModule({
  declarations: [BookListComponent, BookDetailComponent, BookAddComponent, BookEditComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class BookModule {
}
