import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, mapToCanActivate } from '@angular/router';
import { MainComponent } from "./main/main.component";
import { SecondComponent } from './second/second.component';
import { map } from 'rxjs';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, MainComponent, SecondComponent]
})

export class AppComponent {

}
