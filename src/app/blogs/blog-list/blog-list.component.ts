import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr'; import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IBlog } from 'src/app/models/iblog';
import { BlogReopService } from 'src/app/services/repositories/blog-reop.service';
import { BlogDialogComponent } from '../blog-dialog/blog-dialog.component';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';


@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  title = 'AngularTask';
  displayedColumns: string[] = ['id', 'title', 'actions'];
  dataSource!: MatTableDataSource<IBlog>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private dialog: MatDialog,
    private blogService: BlogReopService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getAllBlogs();
  }



  getAllBlogs() {
    this.blogService.getAll().subscribe({
      next: (res: any) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: () => { this.toastr.error("Some thing Error", "Title") }
    })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



  openDialog() {
    this.dialog.open(BlogDialogComponent, {
      width: "35%"
    })
      .afterClosed().subscribe(() => this.getAllBlogs());
  }

  editDialog(row: IBlog) {
    this.dialog.open(BlogDialogComponent, {
      width: "35%",
      data: row
    })
      .afterClosed().subscribe(() => this.getAllBlogs());
  }

  deleteDialog(row: IBlog) {
    this.dialog.open(DeleteConfirmationComponent, {
      width: "40%",
      height: "30%",
      data: row
    })
      .afterClosed().subscribe(() => this.getAllBlogs());
  }


}
