import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthGuard } from './gaurds/auth.guard';
import { ContentFormComponent } from './pages/content-form/content-form.component';
import { ContentComponent } from './pages/content/content.component';
import { ContentsComponent } from './pages/contents/contents.component';
import { SeasonFormComponent } from './pages/season-form/season-form.component';
const routes: Routes = [
  {
    component:HomeComponent,
    path:'',
  },
  {
    component:LoginComponent,
    path:'login',
  },
  {
    component:SignupComponent,
    path:'signup',
  },
  {
    component:ContentsComponent,
    path:'explore',
  },
  {
    component:SearchComponent,
    path:'filter',
  },
  {
    component:ContentComponent,
    path:'content/:id',
  },
  {
    component:ContentFormComponent,
    path:'edit-content/:id',
  },
  {
    component:SeasonFormComponent,
    path:'edit-season/:id',
  },
  {
    component:ContentFormComponent,
    path:'add-content',
  },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
