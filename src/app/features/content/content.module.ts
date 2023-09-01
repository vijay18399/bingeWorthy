import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ContentSliderComponent } from './pages/content-slider/content-slider.component';
import { LoginComponent } from './pages/login/login.component';
import { SearchComponent } from './pages/search/search.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { ContentComponent } from './pages/content/content.component';
import { ContentRoutingModule } from './content-routing.module';
@NgModule({
  declarations: [
    ImageSliderComponent,
    HomeComponent,
    LoginComponent,
    SearchComponent,
    ContentSliderComponent,
    ContentComponent,
  ],
  imports: [
    SharedModule,
    ContentRoutingModule,
    CommonModule,

  ]
})
export class ContentModule { }
