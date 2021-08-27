import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BackgroundService } from '../services/background.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  message!: string[];

  constructor(private http: HttpClient, private backgroundService: BackgroundService) {}

  ngOnInit(): void {
    this.getColor();
  }

  getColor(){
    this.backgroundService.getColor();
    this.message = this.backgroundService.colorTab;
    console.log(this.message);
  }
}
