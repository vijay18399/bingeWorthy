import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { ContentSliderComponent } from './pages/content-slider/content-slider.component';
import { SearchComponent } from './pages/search/search.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:'',
  },
  {
    component:ContentComponent,
    path:'content/:id',
  },
  {
    component:ContentSliderComponent,
    path:'explore',
  },
  {
    component:SearchComponent,
    path:'search',
  },
  {
    component:SignUpComponent,
    path:'signup',
  },
  {
    component:SignInComponent,
    path:'signin',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
