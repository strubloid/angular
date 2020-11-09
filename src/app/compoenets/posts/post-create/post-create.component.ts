import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {NgForm} from "@angular/forms";

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

  onAddPost(form: NgForm) {
  console.log(form)
    if (form.invalid){
      return;
    }

    const post: Post = {
      title: form.value.title,
      content: form.value.content,
    };

    // this is a way to propagate the post value
    this.postCreated.emit(post);

  }

}
