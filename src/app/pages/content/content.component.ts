import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  movieId!: string;
movie : any;
activeSeason:any;
  constructor(private route: ActivatedRoute,public  apiService: ApiService) { }
// Assuming you have defined an array to keep track of expanded seasons:
expandedSeasons: any[] = [];

// Function to toggle the visibility of season details
toggleSeason(i: any): void {
  this.activeSeason  = this.movie.seasons[i];
}

// Function to check if a season is expanded or collapsed
isSeasonExpanded(season: any): boolean {
  return this.expandedSeasons.includes(season);
}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movieId = params['id'];
      // Call a method to fetch movie details based on the ID
      this.getMovieDetails(this.movieId);
    });
  }

  getMovieDetails(id: string): void {
    // Implement your logic to fetch movie details from the server using the movie ID
    // You can use an API service or make an HTTP request here
    // Update the component properties with the fetched movie data
    this.apiService.getContentById(id).subscribe((data) => {
      console.log(data)
      this.movie=data
      if(this.movie.seasons.length){
        this.activeSeason = this.movie.seasons[0]
      }
    });
  }

}
