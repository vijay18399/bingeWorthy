import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import  {avengersMovies}  from './testData';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-content-form',
  templateUrl: './content-form.component.html',
  styleUrls: ['./content-form.component.scss']
})
export class ContentFormComponent {
  contributeForm:any;
  seasonCount: number=0;
  constructor(private route: ActivatedRoute,public  apiService: ApiService) { }
  movieId!: string;
  isEdit:boolean=false;

  activeForm:number=0;
  ngOnInit(): void {
    this.setForm();
    this.route.params.subscribe((params:any) => {
      this.movieId = params['id'];
      if(this.movieId){
        this.getMovieDetails(this.movieId);
        this.isEdit = true
      }
    });
  }
  typeChange(){
    // if(this.contributeForm.type!="MOVIE" &&  !this.contributeForm.seasons.length){
    //     this.contributeForm.seasons.push(this.createSeason(1))
    // }
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
  onSubmit(): void {
    if(this.isEdit){
      this.apiService.updateContent(this.movieId,this.contributeForm).subscribe((data)=>{
        console.log(data)

       });
    }else{
      this.apiService.createContent(this.contributeForm).subscribe((data)=>{
        console.log(data)
        this.setForm()
       });
    }


  }

  updateGenres(genres:string[]){
     this.contributeForm.genres=genres;
  }
  updateTags(tags:string[]){
    this.contributeForm.tags=tags;
 }

   getMovieDetails(id: string): void {
     this.apiService.getContentById(id).subscribe((data) => {
       this.contributeForm = {...data}
     });
   }
   // Add the isSeasonExpanded function
  isSeasonExpanded(index: number): boolean {
    return this.contributeForm.seasons[index].expanded;
  }

  // Add the toggleSeason function
  toggleSeason(index: number): void {
    this.contributeForm.seasons[index].expanded = !this.contributeForm.seasons[index].expanded;
  }
  createSeason(num:number){
    return {
        number: num,
        description:'',
        poster: '',
    };
  }
  updateSeasonCount(count: number) {
    if (this.seasonCount < count) {
      const currentSeasonCount = this.seasonCount;
      for (let i = currentSeasonCount + 1; i <= count; i++) {
        const season = this.createSeason(i);
        this.contributeForm.seasons.push(season);
      }
    } else if (this.seasonCount > count) {
      this.contributeForm.seasons = this.contributeForm.seasons.slice(0, count);
    }

    this.seasonCount = count;
  }
}
