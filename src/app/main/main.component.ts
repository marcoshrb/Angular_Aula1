import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { ServicesService } from '../services/services.service';
import { Product } from '../model/Product';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ CommonModule, RouterOutlet, MatInputModule, MatButtonModule, MatCheckboxModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit
{
  savedText = ""
  savedQuantidade = 0
  mostrarComprados = true;
  list: Product[] = []


  constructor(
    private router: Router,
    private service: ServicesService
    ) { }
  
  ngOnInit(): void {
    this.service.initItems();
    this.list = this.service.getItems();
  }

  markCheckbox(event: any, produto: string)
  {
    this.list.forEach(it => {
      if (it.produto == produto)
        it.comprado = event.target.checked;
    });
  }

  showComprados(event: any)
  {
    this.mostrarComprados = !event.target.checked;
  }

  editar(produto: string)
  {
    this.router.navigate(['edit', produto])
  }

  RemoveItem(text : any){
    console.log(text)
    
    this.list = this.list
      .filter(it => it.produto != text)
    
      this.service.saveItens(this.list)
  }

  updateProduto(event: any)
  {
    this.savedText = event.target.value;
  }
  updateQtd(event: any)
  {
    this.savedQuantidade = event.target.value;
  }
  
  AddItem(){
      this.list.push({
      produto: this.savedText, 
      quantidade: this.savedQuantidade,
      comprado: false
    });
    this.service.saveItens(this.list)
  }
}
