import { Component, OnInit } from '@angular/core';
import { dadosGeracao } from '../dadosGeracao';
import { HttpClient } from '@angular/common/http';

import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { dados } from '../dados';

@Component({
  selector: 'app-energia',
  templateUrl: './energia.component.html',
  styleUrls: ['./energia.component.scss']
})
export class EnergiaComponent implements OnInit {
  
  public unidades: dados[] = []

    public energia: dadosGeracao[] = []
    constructor(private service: ServiceService, private http: HttpClient, private router: Router) { 

    }
  
  geradora!: String;
  data!: String;
  totalKW!: Number;
  id!: Number;
  
    ngOnInit(): void {
      this.service.getUnidades()
      .subscribe((dados => this.unidades = dados)
      )
    }

    post(){
   
      let url = "http://localhost:3000/geracoes"
    
      this.http.post(url, {

        geradora: this.geradora,
        data: this.data,
        totalKW: this.totalKW,
        id: this.id,

      }).toPromise().then((data:any) => {
        console.log(data)
        return this.router.navigate(['listaUnidades'])
      })

    }
  }
   
