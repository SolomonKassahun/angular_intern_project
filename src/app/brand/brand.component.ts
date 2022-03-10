import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';
import { FetchcommentService } from '../fetchcomment.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  constructor(private commentService: FetchcommentService) { }

  ngOnInit(): void {
  }
  Items = this.commentService.getItem();

}
