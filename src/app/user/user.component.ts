import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from '../comment.service';
import { Signup } from '../signup';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  signupInfo: Signup | undefined;
  constructor(private route: ActivatedRoute, private commentService: CommentService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const userIdFromRoute = Number(routeParams.get('UserId'));
    //this.signupInfo= getUser.find(user => user.UserId === userIdFromRoute)
    
  }

}
