import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { JoinnowComponent } from './joinnow/joinnow.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent,data:{title:'Home | ESISU'}},
  { path: 'aboutus', component: AboutusComponent,data:{title:'About Us | ESISU'} },
  { path: 'contact', component: ContactComponent ,data:{title:'Contact | ESISU'}},
  { path: 'course', component: CourseComponent,data:{title:'Course | ESISU'} },
  { path: 'joinnow', component: JoinnowComponent ,data:{title:'Join Now | ESISU'}},
  { path: 'login', component: LoginComponent,data:{title:'Login | ESISU'} },
  { path: 'signin', component: SigninComponent ,data:{title:'SignIn | ESISU'}},
  { path: 'signu', component: SignupComponent,data:{title:'SignUp | ESISU'} }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
