import { Component, OnInit, Input } from '@angular/core';
import { BackgroundService } from 'src/app/services/background.service';

@Component({
  selector: 'app-background-changer',
  templateUrl: './background-changer.component.html',
  styleUrls: ['./background-changer.component.scss'],
})
export class BackgroundChangerComponent implements OnInit {
  
  @Input() color!: string[];
  randomNumber!: number;
  securityNumber!: number;

  constructor(private backgroundService: BackgroundService) {}

  ngOnInit(): void {
    this.color = [
      'green',
      'blue',
      'red',
      'black',
      'white',
      'yellow',
      'pink',
      'purple',
    ];
    this.randomNumber = 4;
    this.securityNumber = 4;
  }

  changeColorBackground() {
    this.randomNumber = Math.random() * this.color.length - 1;
    this.randomNumber = Math.round(this.randomNumber);

    if (this.randomNumber < 0 || this.randomNumber > this.color.length) {
      this.randomNumber = 2;
    } else {
      this.backgroundService.getColor(this.color[this.randomNumber]);
      this.securityNumber = this.randomNumber;
      console.log(this.randomNumber, this.color[this.randomNumber], this.color[this.randomNumber - 1]);
    }

    if(this.color[this.randomNumber] == "green"){
      this.securityNumber = 4;
    }
  }
}
