import { Component, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
// import { KEY } from 'src/app/bo/enum';
// import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-content-slider',
  templateUrl: './content-slider.component.html',
  styleUrls: ['./content-slider.component.scss']
})
export class ContentSliderComponent {

  @ViewChild('reelsContainer', { static: false }) reelsContainer!: ElementRef;
  movies:any = []
  pageNumber:number =1;
  shortNumber:number=0;
  currentPage: number=1;
  totalCount!:number;
  loadDonetill!:number;
  // Your existing movies array
  constructor(public apiService: ApiService) {
    this.fetchMovies();
   }

   fetchMovies() {
     this.apiService.getContent({ perPage: 4, page: this.pageNumber }).subscribe((data) => {
      this.totalCount = data.totalCount;
      this.movies = [...this.movies,...data.contents];
     });
   }
  ngOnInit(): void {
    document.addEventListener("keydown", (event:KeyboardEvent)=>{
      if (event.key === "ArrowDown") {
        this.navTo(this.shortNumber+1)
       }
       if (event.key ==="ArrowUp") {
        this.navTo(this.shortNumber-1)
       }
    });
  }
   topAny(): boolean {
    if(this.reelsContainer){
      return  this.reelsContainer.nativeElement.scrollTop === 0;
    }
    return   true ;
  }
  navTo(i:number): void {

    if(i+1>this.totalCount){
      return;
    }
    console.log(i >= this.movies.length - 2 && this.movies.length <= this.totalCount)
    this.shortNumber=i;
    let  movieId =  this.movies[i]._id;
    document.getElementById(movieId)?.scrollIntoView({behavior: "smooth",block: "start", inline: "start"})
    if(i >= this.movies.length - 2 && this.movies.length <= this.totalCount){
       this.pageNumber++;
       this.fetchMovies()
    }
  }


}
