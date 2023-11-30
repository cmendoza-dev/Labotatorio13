import { Component } from '@angular/core';
import { ArtistsService} from 'src/app/services/artists.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})

export class NavbarComponent {
  searchTerm: string = '';

  constructor(private artistsService: ArtistsService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    // Llama al método de búsqueda al cargar la página
    this.searchArtists();
  }

  searchArtists(): void {
  
    // Llama al método del servicio para establecer el término de búsqueda
    this.artistsService.setSearchTerm(this.searchTerm);
    // Llama al método del servicio para buscar artistas por nombre
    this.artistsService.searchArtistsByName(this.searchTerm);
     // Forzar la detección de cambios después de actualizar los resultados
  this.cdr.detectChanges();
  }
}
