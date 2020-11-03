import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

//Decorador: Importa los servicion automaticamente
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient)
    {
      console.log("Servicio Corriendo");
    }
    
    getQuery(query:string){
      const url = `https://api.spotify.com/v1/${query}`;

      const headers = new HttpHeaders({
        'Authorization': 'Bearer BQDp7n7vaCcIpAHjfJknZ8t8NgjRRTE921zB1NiJY0FJzVkOsWsGyBoD-4MNWvVCzPmQX_RKkQBc0PZXT00'
      })

      return this.http.get(url,{headers});
    }

  getNewReleases(){
     return this.getQuery('browse/new-releases?limit=20')
            .pipe(map(data => data['albums'].items ));
  }
  getArtista(termino:string){

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
            .pipe(map(data => data['artists'].items ));
  }
}
