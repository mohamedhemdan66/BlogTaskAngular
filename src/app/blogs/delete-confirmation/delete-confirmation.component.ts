import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { IBlog } from 'src/app/models/iblog';
import { BlogReopService } from 'src/app/services/repositories/blog-reop.service';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.scss']
})
export class DeleteConfirmationComponent implements OnInit {

  constructor(
    private blogService:BlogReopService,
    private dialogRef: MatDialogRef<DeleteConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public row:IBlog,
    private toastr: ToastrService
  ) { }
  
  ngOnInit(): void {
  }


  confirmDelete(){
    this.blogService.delete(this.row.id).subscribe({
      complete:()=>{
         this.toastr.success("Successfully added Blog !",'Title');
          this.dialogRef.close('delete');
        },
      error:()=>{ this.toastr.error("Some thing Error !");}
    });
  }


}
