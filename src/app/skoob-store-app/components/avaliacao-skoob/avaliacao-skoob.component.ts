import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-avaliacao-skoob',
  templateUrl: './avaliacao-skoob.component.html',
  styleUrls: ['./avaliacao-skoob.component.css']
})
export class AvaliacaoSkoobComponent implements OnChanges {

  @Input()
  avaliacao: number = 0;

  starWidth!: number;

  constructor() { }
  ngOnChanges(): void {
    this.starWidth = this.avaliacao * 74/5
  } 
}
