import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {ViewBlogComponent} from './view-blog/view-blog.component';
import {NewBlogComponent} from './new-blog/new-blog.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // default route
  { path: 'home', component: HomePageComponent },
  { path: 'blogs/:id', component: ViewBlogComponent },
  { path: 'new-blog', component: NewBlogComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
