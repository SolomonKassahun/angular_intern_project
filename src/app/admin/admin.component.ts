import { Component, OnInit } from '@angular/core';
import { FetchcommentService } from '../fetchcomment.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  posts;
  constructor(private fetchCommentService: FetchcommentService, ) { }

  ngOnInit(): void {
  }
  getComm = this.fetchCommentService.getComment();
  getUser = this.fetchCommentService.getUsers();
  getItem = this.fetchCommentService.getItem();
  deleteItem(post){
    this.fetchCommentService.deleteComment(post.id)
    .subscribe(response => {
      this.posts = this.posts.filter(item => item.id !== post.id);
    });
  }

}
