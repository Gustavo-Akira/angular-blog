import { Injectable } from '@angular/core';
import {Post}  from '../model/Post';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>('http://localhost:3000/posts');
  }
  getPost(id:Number){
    return this.http.get<Post>(`http://localhost:3000/posts/${id}`);
  }
  saveNewPost(post: Post) {
    return this.http.post<Post>('http://localhost:3000/posts', post);
  }
  saveUpdatedPost(id:Number,post:Post){
    return this.http.put<Post>(`http://localhost:3000/posts/${id}`,post);
  }
  deletePost(id:Number){
    return this.http.delete(`http://localhost:3000/posts/${id}`);
  }
}
