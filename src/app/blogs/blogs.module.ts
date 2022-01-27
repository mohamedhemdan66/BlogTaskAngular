import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDialogComponent } from './blog-dialog/blog-dialog.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';

@NgModule({
  declarations: [
    BlogListComponent,
    BlogDialogComponent,
    DeleteConfirmationComponent
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule, 
    MatDialogModule,
    ToastrModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule,
    MatNativeDateModule,
    MatSelectModule
  ]
})
export class BlogsModule { }
