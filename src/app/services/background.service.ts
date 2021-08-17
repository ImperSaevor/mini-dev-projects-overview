import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BackgroundService {
  color!: string;

  getColor(currentColor: string) {
    this.color = currentColor;
  }
}
