import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chip-in',
  templateUrl: './chip-in.component.html',
  styleUrls: ['./chip-in.component.scss']
})
export class ChipInComponent implements OnInit {

  private chipin: any[];
  private chipinAdm: any[];
  private group_id: string;
  // private http: HttpClient;
  constructor(private router : ActivatedRoute, private http: HttpClient) {
    this.group_id = this.router.snapshot.paramMap.get("group_id"); 
    console.log(this.group_id);
    this.chipin = [
      {
        name: "Pelada dos cria",
        place: "Rua de baixo, numero 22",
        date: "22/22",
        time: "30:30"
      },
      {
        name: "Só marotos",
        place: "Rua de baixo, numero 22",
        date: "22/22",
        time: "30:30"
      }
    ];
    this.chipinAdm = [
      {
        name: "Pelada dos cria",
        place: "Rua de baixo, numero 22",
        date: "22/22",
        time: "30:30"
      },
      {
        name: "Só marotos",
        place: "Rua de baixo, numero 22",
        date: "22/22",
        time: "30:30"
      }
    ];
  }

  ngOnInit() {
    this.http.get('http://localhost:5000/vaquinhas_coletivas/', {responseType: "text"}).subscribe(data => {
      console.log(data);
    });
  }

}
