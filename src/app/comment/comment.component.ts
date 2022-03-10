import { Component, OnInit } from '@angular/core';
import { CommentMo } from '../comment';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  commentModel=new CommentMo(
    1,
    "",
    "",
    "",
    "",
  
    )
  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.commentService.comment(this.commentModel)
       .subscribe(
      data=>alert("Thank You!! you comment sent Sucessfully "),
      error=>console.error("Error!",error)
      )
  
   
     
  }


}
