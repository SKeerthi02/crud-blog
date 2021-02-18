import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import {Blog} from '../models/blog';
import {BlogService} from '../service/blog.service';

@Component({
  selector: 'app-display-blog',
  templateUrl: './display-blog.component.html',
  styleUrls: ['./display-blog.component.css']
})
export class DisplayBlogComponent implements OnInit {
  @Input() blog: Blog;

  @Output() deleteEvent = new EventEmitter();

  constructor(private router: Router, private blogService: BlogService) {}

  ngOnInit() {}

  public route(): void {
    this.router.navigateByUrl('/blogs/' + this.blog.id);
  }

  public removeBlog() {
    this.blogService.deleteBlog(this.blog.id).subscribe(res => {
      this.deleteEvent.emit(this.blog);
    });
  }

}
