import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  enteredContent = '';
  enteredTitle = '';

  // this Output enable a parent to get this value
  @Output() postCreated = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddPost() {
    const post = {
      title: this.enteredTitle,
      content: this.enteredContent
    };

    // this is a way to propagate the post value
    this.postCreated.emit(post);

  }

}
