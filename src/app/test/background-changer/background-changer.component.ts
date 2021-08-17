import { Component, OnInit, Input } from '@angular/core';
import { BackgroundService } from 'src/app/services/background.service';

@Component({
  selector: 'app-background-changer',
  templateUrl: './background-changer.component.html',
  styleUrls: ['./background-changer.component.scss']
})
export class BackgroundChangerComponent implements OnInit {

  @Input() color!: string[];
  randomNumber!: number;

  constructor(private backgroundService: BackgroundService) { }

  ngOnInit(): void {
    this.color = ['green','blue', 'red', 'black', 'white'];
  }

  changeColorBackground(){
    this.randomNumber = Math.random() * this.color.length;
    this.backgroundService.getColor(this.color[this.randomNumber]);
    this.randomNumber = Math.round(this.randomNumber);
    this.backgroundService.getColor(this.color[this.randomNumber])
  }

}
