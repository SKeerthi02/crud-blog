import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { ApiService } from './api.service';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import {Blog} from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private apiService: ApiService) {}

  public getAllBlogs(): Observable<Blog[]> {
    return this.apiService.get(environment.api.entries).pipe(
      map(json => {
        return json.map(post => new Blog(post));
      })
    );
  }

  public getSingleBlog(id: string): Observable<Blog> {
    return this.apiService.get(environment.api.entries + '/' + id).pipe(
      map(json => {
        return new Blog(json);
      })
    );
  }

  public addNewBlog(blog: Blog): Observable<any> {
    return this.apiService.post(environment.api.entries, blog);
  }
  public editBlog(id: number, blog: Blog): Observable<any> {
    return this.apiService.put(environment.api.entries + '/' + id, blog);
  }
  // tslint:disable-next-line:typedef
  public deleteBlog(id: number) {
    return this.apiService.delete(environment.api.entries + '/' + id);
  }
}
