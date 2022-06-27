  import { Component, OnInit } from '@angular/core';
  import { dados } from '../dados';
  import { HttpClient } from '@angular/common/http';

  import { ServiceService } from '../service.service';
  import { Router } from '@angular/router';
  
  @Component({
    selector: 'app-criar-unidades',
    templateUrl: './criar-unidades.component.html',
    styleUrls: ['./criar-unidades.component.scss']
  })
  export class CriarUnidadesComponent implements OnInit {

    constructor(private service: ServiceService, private http: HttpClient, private router: Router) { }
  
  apelido!: String;
  local!: String;
  marca!: String;
  modelo!: String;
  status!: Boolean;
  id!: Number;
  
    ngOnInit(): void {
  
    }
    post(){
   
      let url = "http://localhost:3000/unidades"
    
      this.http.post(url, {

        apelido: this.apelido,
        local: this.local,
        marca: this.marca,
        modelo: this.modelo,
        status: this.status

      }).toPromise().then((data:any) => {
        console.log(data)
        return this.router.navigate(['listaUnidades'])
      })
    }

  
  }
   
