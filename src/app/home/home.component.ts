import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  message:any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('http://localhost:5000/api').subscribe(data => this.message = data[1].colorName);
  }

  getWord(): void {
    this.http.get<any>('http://localhost:5000/api').subscribe(data => this.message = data);
    console.log(this.message);
  }
}
