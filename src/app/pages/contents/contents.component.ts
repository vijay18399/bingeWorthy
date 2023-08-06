import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

interface Movie {
  title: string;
  genres: string[];
  runtime: string;
  director: string;
  poster: string;
}
@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent {
  movies: any[] = [];
  currentPage = 1;
  totalPages = 1;
  totalPagesArray: number[] = [];
  userRole ='GUEST';
  perPage:number;
  loading :boolean = true;
  constructor(public apiService: ApiService,public authService: AuthService) {
   this.userRole =  this.authService.getUserRole()
   this.perPage =  this.userRole == "ADMIN" ? 10 : 4;
   this.fetchMovies();
  }

  fetchMovies() {
    this.loading = true;
    this.apiService.getContent({ perPage: this.perPage, page: this.currentPage }).subscribe((data) => {
      this.movies = data.contents;
      this.currentPage = data.currentPage;
      this.totalPages = data.totalPages;
      this.totalPagesArray = Array.from({ length: this.totalPages }, (_, i) => i + 1);
      this.loading = false;
    });
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.fetchMovies();
  }
  deleteMovie(id:string){
    this.apiService.deleteContent(id).subscribe((data)=>{
      this.fetchMovies()
    })
  }
}
