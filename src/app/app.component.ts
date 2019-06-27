import { Component } from '@angular/core';

@Component({
  selector: 'la-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ListaAnimales';

  animals:Array<Object> = [{
    id: 1,
    category: 'mammal',
    name: 'Dog'
},{
    id: 2,
    category: 'oviparous',
    name: 'Duck'
},{
    id: 3,
    category: 'mammal',
    name: 'Elephant'
},{
    id: 4,
    category: 'reptile',
    name: 'Snake'
}];

AnadirAnimal() {
this.animals.push({
  id: 5,
  category: "bird",
  name: "Aguilucho"});
}

animalTrackerFunction(index: number, animal: any) {
  return animal.id;
}

}
