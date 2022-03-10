import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommentComponent } from './comment/comment.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BrandComponent } from './brand/brand.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { ItemListComponent } from './item-list/item-list.component';

import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CommentComponent,
    SignupComponent,
    SigninComponent,
    ContactComponent,
    HomeComponent,
    FooterComponent,
    UserComponent,
    AdminComponent,
    BrandComponent,
    CommentListComponent,
    UserListComponent,
    ItemListComponent,
    
 
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
  
    
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
