import {Component, Input, OnInit} from '@angular/core';
import {BlogService} from '../service/blog.service';
import {Blog} from '../models/blog';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: []
})
export class NewBlogComponent implements OnInit {
  @Input() public blog: Blog;
  @Input() public edit = false;

  public process = false;
  public isSubmit = false;
  public success = false;
  public failure = false;

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    if (this.blog == null) {
      this.blog = new Blog();
    }
  }

  public submit(): void {
    this.process = this.isSubmit = true;

    console.log('submitting blog: ' + JSON.stringify(this.blog));

    if (this.edit === false) {
      this.blogService.addBlog(this.blog).subscribe(
      // response => console.log('response on new post: ' + JSON.stringify(response))
      response => {
        // Handle each observable response
        console.log('result: ' + response);
        this.process = false;
      },
      error => {
        this.process = false;
        this.failure = true;
      },
      () => {
        this.process = false;
        this.success = true;
      }
    );
    } else {
      this.blogService.editBlog(this.blog.id, this.blog).subscribe(
      // response => console.log('response on new post: ' + JSON.stringify(response))
      response => {
        // Handle each observable response
        console.log('result: ' + response);
        this.process = false;
      },
      error => {
        this.process = false;
        this.failure = true;
      },
      () => {
        this.process = false;
        this.success = true;
      }
    );
    }
  }
}
