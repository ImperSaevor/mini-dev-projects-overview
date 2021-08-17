import { Component, OnInit } from '@angular/core';
import { BackgroundService } from './services/background.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-mini-project';
  color!: string;

  constructor(private backgroundService: BackgroundService) {}

  OnInit(): void {}

  getColor(){
    this.color = this.backgroundService.color;
    return this.color;
  }
}
