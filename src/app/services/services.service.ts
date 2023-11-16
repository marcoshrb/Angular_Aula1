import { Injectable } from '@angular/core';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }
  
  initItems()
  {
    if (typeof window !== "undefined")
    {
      var storedData = localStorage.getItem('list');
      if (storedData !== null)
        return;
  
      let initalData = [
        { produto: 'arroz', quantidade: 2, comprado: false },
        { produto: 'leite', quantidade: 8, comprado: false },
        { produto: 'nescau', quantidade: 1, comprado: false }
      ]
      localStorage.setItem('list', JSON.stringify(initalData));
    }
  }
  saveItens(list: any){
    if (typeof window !== "undefined"){
      localStorage.setItem('list', JSON.stringify(list));
    }
  }

  getItems() : Product[]
  {
    if (typeof window !== "undefined")
    {
      var storedData = localStorage.getItem('list');
      if (storedData === null)
        return [];
      
      let data = JSON.parse(storedData)
      return data
    }
    return [];
  }
}
