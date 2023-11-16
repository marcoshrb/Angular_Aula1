import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SecondComponent } from './second/second.component';
import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'second', component: SecondComponent },
    { path: 'edit/:produto', component: SecondComponent }
];

