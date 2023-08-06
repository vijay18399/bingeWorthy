import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { seasons } from './testData';

@Component({
  selector: 'app-season-form',
  templateUrl: './season-form.component.html',
  styleUrls: ['./season-form.component.scss']
})
export class SeasonFormComponent {
  seasonCount:number=0;
  contributeForm:any;
  activeFormIndex:number=0;
  episodeCount:number[]=[0];
  constructor(private route: ActivatedRoute,public  apiService: ApiService) { }
  movieId!: string;
  ngOnInit(): void {
    this.setForm();
    this.route.params.subscribe((params:any) => {
      this.movieId = params['id'];
      if(this.movieId){
        this.getMovieDetails(this.movieId);
        // this.isEdit = true
      }
    });
  }
  changeForm(i:number){
    this.activeFormIndex =i;
  }
  setForm(){
    this.contributeForm = {
      title: "",
      poster: "",
      tags: [],
      releaseDate: null,
      genres: [],
      type: "MOVIE",
      seasons: [],
      actors: [],
    }
    // this.contributeForm = {...avengersMovies[3]}
  }
  getMovieDetails(id: string): void {
    this.apiService.getContentById(id).subscribe((data) => {
      this.contributeForm = {...data}
      //  this.contributeForm.seasons = seasons;
      //  console.error(seasons)
       this.seasonCount =  this.contributeForm.seasons.length;
    });
  }
  createSeason(num:number){
    return {
        number: num,
        description:'',
        poster: '',
        episodes: []
    };
  }
  updateSeasonCount(count: number) {
    if (this.seasonCount < count) {
      const currentSeasonCount = this.seasonCount;
      for (let i = currentSeasonCount + 1; i <= count; i++) {
        const season = this.createSeason(i);
        this.episodeCount[i]=0;
        this.contributeForm.seasons.push(season);
      }
    } else if (this.seasonCount > count) {
      this.contributeForm.seasons = this.contributeForm.seasons.slice(0, count);
    }

    this.seasonCount = count;
  }
  updateEpisodeCount(count: number) {
    if(!this.episodeCount[this.activeFormIndex]){
      this.episodeCount[this.activeFormIndex] =0;
    }
    if (this.episodeCount[this.activeFormIndex] < count) {
      const currentepisodeCount = this.episodeCount[this.activeFormIndex];
      for (let i = currentepisodeCount + 1; i <= count; i++) {
        const episode = {
          number: count,
          title:'',
          description: '',
        };
        this.contributeForm.seasons[this.activeFormIndex].episodes.push(episode);
      }
    } else if (this.episodeCount[this.activeFormIndex] > count) {
      this.contributeForm.seasons[this.activeFormIndex].episodes = this.contributeForm.seasons[this.activeFormIndex].episodes.slice(0, count);
    }

    this.episodeCount[this.activeFormIndex] = count;
  }
  onSubmit(){
    this.apiService.updateContent(this.movieId,this.contributeForm).subscribe((data)=>{
      console.log(data)

     });
  }
}
