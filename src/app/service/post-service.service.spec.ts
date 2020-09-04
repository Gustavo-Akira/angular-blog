import { TestBed } from '@angular/core/testing';

import { PostService } from './post.service';
import { Post } from '../model/Post';

describe('PostServiceService', () => {
  let service: PostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should create another post',()=>{
    let newPost:Post = new Post(0,'akira','mensagem');
    let savedPost = service.saveNewPost(newPost);
    expect(savedPost).toBeDefined();
  });
});
