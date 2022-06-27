import { Component, OnInit } from '@angular/core';
import { dados } from '../dados';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-lista-unidades',
  templateUrl: './lista-unidades.component.html',
  styleUrls: ['./lista-unidades.component.scss']
})
export class ListaUnidadesComponent implements OnInit {

  public unidades: dados[] = []

  constructor(
    private service: ServiceService, 
    private http: HttpClient, 
    private router: Router, 
    private route: ActivatedRoute) { }

    ngOnInit(): void {
      this.service.getUnidades()
      .subscribe((dados => this.unidades = dados)
      )}

    onDelete(dados: dados) {
      this.service.OnDelete(dados).subscribe(
        (resp) => {
          console.log(resp)
      
        })
      }

    public routerCriar(){
      this.router.navigate(['criarUnidades'])
    }

    
}