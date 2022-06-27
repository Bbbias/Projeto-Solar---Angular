import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-atualizar-unidades',
  templateUrl: './atualizar-unidades.component.html',
  styleUrls: ['./atualizar-unidades.component.scss']
})
export class AtualizarUnidadesComponent implements OnInit {
  
  Data: any = {};
  id = this.route.snapshot.params['id'];

  constructor( public service: ServiceService, public route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    this.service.getUnidade(this.id).subscribe((data: {}) => {
      this.Data = data;
    })
  }

  updateUnidade() {
      this.service.OnUpdate(this.id, this.Data).subscribe(data => {
        this.router.navigate(['/listaUnidades'])
      })
    
  }
 
}
