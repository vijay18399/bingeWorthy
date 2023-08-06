import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
   movies = [
    {
      poster:'https://www.themoviedb.org/t/p/original/nEufeZlyAOLqO2brrs0yeF1lgXO.jpg',
      name : 'RRR',
      id: 2341,
    },
    {
      poster:'https://rukminim2.flixcart.com/image/850/1000/j6xxgnk0/poster/q/u/a/small-baahubali-1-poster-paper-print-18-inch-x-12-inch-rolled-original-imaexagrmsrmpgyy.jpeg?q=20',
      name : 'RRR',
      id: 2344,
    },
    {
      poster:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSDT8DLq-8swTp99tkIg7WkHlQEChWGAl71dJClxCLnR4y5-zwd',
      name : '24',
      id: 2334,
    }
  ]
}
