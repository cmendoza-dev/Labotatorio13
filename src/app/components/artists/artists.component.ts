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
    
        // Solo si no hay resultados de búsqueda, obtén todos los artistas
        if (this.artists.length === 0) {
            this.artists = this._artistService.getArtists();
        }
    }
    
    verArtist(i: number) {
        this.router.navigate(['/artist', i]);
    }
    
}
