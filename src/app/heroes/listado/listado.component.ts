import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk', 'Thor', 'Superman', 'Batman'];
  heroeBorrado: string = '';

  borrarHeroe() {
    console.log("borrando...");
    this.heroeBorrado = this.heroes.pop() || '';
  }
}
