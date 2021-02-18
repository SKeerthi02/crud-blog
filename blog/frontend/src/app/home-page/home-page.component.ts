import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../models/blog';
import {BlogService} from '../service/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  loading: boolean = true;
  addDummyText: string = 'add sample blog';
  blogs: Blog[];

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.getAllBlogs();
  }

  private getAllBlogs(): void {
    this.blogService.getBlogs().subscribe(blogs => {
      this.blogs = blogs;
      this.loading = false;
    });
  }
  private celeryTask(): void {
    if(this.addDummyText === 'add sample blog') {
      this.blogService.addCelerayTask(1).subscribe(res => {
      });
      this.addDummyText = 'Please Wait';
      setInterval(() => this.getAllBlogs(),5000);
    }
  }
  private refresh(event): void {
    this.blogs = this.blogs.filter(item => item !== event);
  }
}
