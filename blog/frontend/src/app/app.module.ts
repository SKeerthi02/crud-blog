import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {HomePageComponent} from './home-page/home-page.component';
import {ViewBlogComponent} from './view-blog/view-blog.component';
import {NavigationComponent} from './navigation/navigation.component';
import {FooterComponent} from './footer/footer.component';
import {DisplayBlogComponent} from './display-blog/display-blog.component';
import {NewBlogComponent} from './new-blog/new-blog.component';
import {LoadingComponent} from './loading/loading.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {ApiService} from './service/api.service';
import {HeaderComponent} from './header/header.component';
import {BlogService} from './service/blog.service';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ViewBlogComponent,
    NavigationComponent,
    FooterComponent,
    DisplayBlogComponent,
    NewBlogComponent,
    HeaderComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ApiService, BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
