import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  artistas : any[] = [];
  loading: boolean;
  constructor(private spotity: SpotifyService) {
  }
  
  buscar(termino:string){
    this.loading = true;
    console.log(termino);
    this.spotity.getArtista(termino)
      .subscribe((data: any) => {
        this.artistas = data;
        this.loading = false;
      });
  };

}
