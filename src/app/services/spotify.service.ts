import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Decorador: Importa los servicion automaticamente
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient)
    {
      console.log("Servicio Corriendo");
    }
  getNewReleases(){
      const headers = new HttpHeaders({
        'Authorization': 'Bearer BQAAWJVAT9l1phqvE4-NcFafvAHf7ihhnVl4NkkAypY2rpvQLjrOUUbK8ucbCE5oD1LJBMrfAoSs-L9fhpU'
      })
      return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20',{headers});
  }
}
