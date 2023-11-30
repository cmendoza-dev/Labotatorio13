import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Artist, ArtistsService } from 'src/app/services/artists.service';

@Component({
    selector: 'app-artists',
    templateUrl: './artists.component.html',
    styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

    artists: Artist[] = [];

    constructor(private _artistService: ArtistsService, private router: Router) {}

    ngOnInit(): void {
        // Obtén los resultados de búsqueda del servicio
        this.artists = this._artistService.getSearchResults();
      }
    

    verArtist(i: number) {
        this.router.navigate(['/artist', i]);
    }
}
