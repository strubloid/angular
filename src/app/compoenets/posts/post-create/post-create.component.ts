import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Post } from '../../posts/post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  enteredContent = '';
  enteredTitle = '';

  // this Output enable a parent to get this value
  @Output() postCreated = new EventEmitter<Post>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddPost() {
    const post: Post = {
      title: this.enteredTitle,
      content: this.enteredContent
    };

    // this is a way to propagate the post value
    this.postCreated.emit(post);

  }

}
