import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef , MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { IBlog } from 'src/app/models/iblog';
import { BlogReopService } from 'src/app/services/repositories/blog-reop.service';

@Component({
  selector: 'app-blog-dialog',
  templateUrl: './blog-dialog.component.html',
  styleUrls: ['./blog-dialog.component.scss']
})
export class BlogDialogComponent implements OnInit {

  actionBtnVal:string = "Create";
  constructor(
    private formBuilder:FormBuilder,
    private blogService:BlogReopService,
    private dialogRef: MatDialogRef<BlogDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editData:IBlog,
    private toastr: ToastrService
    ) { }
  
  ngOnInit(): void {
    if(this.editData){
      this.actionBtnVal = "Update";
      this.blogForm.setValue(this.editData);
    }
  }
 

  blogForm = this.formBuilder.group({
    id:0,
    title:['',Validators.required],
    body:['',Validators.required],
    creationDate:['',Validators.required]
  })

  onSave(){
    if(!this.editData){
      this.addBlog();
    }else{
      this.editBlog();
    }
  }

  addBlog(){
     if(this.blogForm.valid){
      this.blogService.add(this.blogForm.value).subscribe({
        complete:()=>{
           this.toastr.success("Successfully added Blog !",'Title');
            this.blogForm.reset();
            this.dialogRef.close('create');
          },
        error:()=>{ this.toastr.error("Some thing Error !");}
      });
     };
  }


  editBlog(){
    this.blogService.edit(this.blogForm.value).subscribe({
      complete:()=>{
         this.toastr.success("Successfully added Blog !",'Title');
          this.blogForm.reset();
          this.dialogRef.close('update');
        },
      error:()=>{ this.toastr.error("Some thing Error !");}
    });
  }

  
}

