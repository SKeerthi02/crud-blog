import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {BlogService} from '../service/blog.service';
import {Router} from '@angular/router';
import {Blog} from '../models/blog';

@Component({
  selector: 'app-display-blog',
  templateUrl: './display-blog.component.html',
  styleUrls: ['./display-blog.component.css']
})
export class DisplayBlogComponent implements OnInit {

  @Input() blog: Blog;
  @Output() deleteEvent = new EventEmitter();
  constructor(private router: Router, private blogService: BlogService) { }

  ngOnInit(): void {
  }
  public navigate(): void {
    this.router.navigateByUrl('/blogs' + this.blog.id);
  }
  // tslint:disable-next-line:typedef
  public removeBlog() {
    this.blogService.deleteBlog(this.blog.id).subscribe(res => {
      this.deleteEvent.emit(this.blog);
    });
  }

}
