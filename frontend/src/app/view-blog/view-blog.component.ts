import { Component, OnInit } from '@angular/core';
import {Blog} from '../models/blog';
import {BlogService} from "../service/blog.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent implements OnInit {
  blog: Blog;
  isEdit = false;
  loading = false;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private blogService: BlogService) {}

  ngOnInit(): void {
    this.getBlog();
  }
  public deleteBlog(){
    const id = this.route.snapshot.paramMap.get('id');
    this.blogService.deleteBlog(id).subscribe(res => {
      this.router.navigate(['/home']);
    });
  }
  // tslint:disable-next-line:typedef
  public edit(){
    this.isEdit = !this.isEdit;
  }
  private getBlog(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('id: ' + id);

    // @ts-ignore
    this.blogService.getSingleBlog(id).subscribe(blog => {
      console.log('blog: ' + JSON.stringify(blog));
      this.blog = blog;
      this.loading = false;
    });
  }
}
