import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BrandComponent } from './brand/brand.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentComponent } from './comment/comment.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ItemListComponent } from './item-list/item-list.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path: 'contact', component: ContactComponent },
  { path: 'signup', component: SignupComponent },
  {path:'signin', component: SigninComponent},
  {path:'comment', component: CommentComponent},
  {path:'admin', component: AdminComponent},
  {path:'user', component: UserComponent},
  {path:'brand', component: BrandComponent},
  {path:'commentlist', component: CommentListComponent},
  {path:'userlist', component: UserListComponent},
  {path:'itemlist', component: ItemListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
