import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSplideModule } from 'ngx-splide';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { BreadcrumbComponent } from './components/breadcrumb.component';
import { chipInputComponent } from './components/chip-input.component';
import { InputUploadComponent } from './components/input-upload.component';
import { ModalComponent } from './components/modal.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthGuard } from './gaurds/auth.guard';
import { ContentFormComponent } from './pages/content-form/content-form.component';
import { ContentsComponent } from './pages/contents/contents.component';
import { ContentComponent } from './pages/content/content.component';
import { CounterComponent } from './components/counter.component';
import { SeasonFormComponent } from './pages/season-form/season-form.component';
import { CollapsiblePanelComponent } from './components/collapsible.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    LoginComponent,
    BreadcrumbComponent,
    chipInputComponent,
    InputUploadComponent,
    ModalComponent,
    SignupComponent,
    ProfileComponent,
    ContentFormComponent,
    ContentsComponent,
    ContentComponent,
    CounterComponent,
    CollapsiblePanelComponent,
    SeasonFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSplideModule,
    BrowserAnimationsModule
  ],
  providers: [
  {
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
  },
  AuthGuard
],
  bootstrap: [AppComponent]
})
export class AppModule { }
