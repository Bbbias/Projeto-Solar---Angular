import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { dados } from '../dados';
import { dadosGeracao } from '../dadosGeracao';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public unidades: dados[] = []
  public statusFiltro: dados[] = []
  public geracoes: dadosGeracao[] = []

  totalUnidades!: Number
  total!: Number
  statusTrue!: Number
  statusFalse!: Number
  
  constructor( private service: ServiceService,) {}

  ngOnInit(): void {

    this.service.getUnidades()
      .subscribe((dados => this.unidades = dados)
      )

    this.service.getGeracao()
      .subscribe((dados => this.geracoes = dados)
      )

    this.service.getUnidades()
      .subscribe((unidades) => {
        this.totalUnidades = unidades.length
      })
    
    this.service.getUnidades()
      .subscribe((unidades) => {
        this.statusFiltro = unidades.filter(unidades => unidades.status === true)
        this.statusTrue = this.statusFiltro.length
      })

    this.service.getUnidades()
      .subscribe((unidades) => {
        this.statusFiltro = unidades.filter(unidades => unidades.status != true)
        this.statusFalse = this.statusFiltro.length
      })

    this.service.getGeracao()
      .subscribe((geracoes) => {
        this.total = geracoes.reduce((x, y) => {
          return x + Number(y.totalKW)
        },0)})

      }}
  
