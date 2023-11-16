import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent implements OnInit, OnDestroy
{
  produto = ""
  subscription: any

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.route.params
      .subscribe(p => {
        this.produto = p['produto'];
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  salvar() {
    this.router.navigate([''])
  }
}
