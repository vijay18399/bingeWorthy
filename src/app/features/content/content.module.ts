import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ContentSliderComponent } from './pages/content-slider/content-slider.component';
import { SearchComponent } from './pages/search/search.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { ContentComponent } from './pages/content/content.component';
import { ContentRoutingModule } from './content-routing.module';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ResetComponent } from './pages/reset/reset.component';
@NgModule({
  declarations: [
    ImageSliderComponent,
    HomeComponent,
    SearchComponent,
    ContentSliderComponent,
    ContentComponent,
    SignUpComponent,
    SignInComponent,
    ResetComponent,
  ],
  imports: [
    SharedModule,
    ContentRoutingModule,
    CommonModule,

  ]
})
export class ContentModule { }
