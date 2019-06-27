import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  private adversarios: any[];
  constructor() { 
    this.adversarios = [
      {
        nome: "JOão",
        id: 5
      },{
        nome: "JOão",
        id: 5
      },{
        nome: "JOão",
        id: 5
      },{
        nome: "JOão",
        id: 5
      }
    ];
  }

  ngOnInit() {
  }

}
