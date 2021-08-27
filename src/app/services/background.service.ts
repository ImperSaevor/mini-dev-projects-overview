import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class BackgroundService {
  color!: string;
  colorTab!: string[];

  constructor(private http: HttpClient) {}

  getColor() {
    this.http
      .get<any>('http://localhost:5000/api/beginner/color')
      .subscribe(async (data) => {
        this.colorTab = data;
      });
  }

  changeColor(anyColor: string) {
    this.color = anyColor;
  }
}
