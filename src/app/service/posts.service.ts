import { Injectable } from '@angular/core';
import { Post }  from '../compoenets/posts/post.model'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts: Post[] = [];

  getPosts()
  {
    return [...this.posts]
  }

  addPost(title: string, content: string)
  {
    const post: Post = { title: title, content: title}
    this.posts.push();

  }
  constructor() { }
}
