import { Component, OnInit } from '@angular/core';
import {PostService} from '../service/post.service';
import { Post } from '../model/Post';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  posts:Post[] = [];
  postService:PostService;
  constructor(postService:PostService) { 
    this.postService = postService;
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(response =>{
      this.posts = response;
    })
  }

}
