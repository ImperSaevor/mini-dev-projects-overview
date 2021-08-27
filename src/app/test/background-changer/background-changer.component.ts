import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { of } from 'rxjs';
import { BackgroundService } from 'src/app/services/background.service';

@Component({
  selector: 'app-background-changer',
  templateUrl: './background-changer.component.html',
  styleUrls: ['./background-changer.component.scss'],
})
export class BackgroundChangerComponent implements OnInit {
  @Input() colorText: string = 'black';
  colorBackground: string = 'white';
  color!: string[];

  constructor(private backgroundService: BackgroundService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.colorBackground = 'white';
    this.colorText = 'black';
    this.backgroundService.color = this.colorBackground;
  }

  getColor() {
    this.backgroundService.getColor();
    this.color = this.backgroundService.colorTab;
    if(this.backgroundService.color != undefined){
      this.colorText = this.backgroundService.color;
    }else{
      this.colorText = 'blue';
    }
  }

  changeColor() {
    this.getColor();
    if (this.color != null) {
      let index = Math.round(Math.random() * (this.color.length - 1));
      this.colorBackground = this.color[index];
      this.backgroundService.color = this.colorBackground;
      if (this.colorBackground === 'black') {
        this.colorText = 'white';
      } else if (this.colorText === this.colorBackground) {
        this.changeColor();
      } else if (
        this.colorBackground === undefined ||
        this.colorText === undefined
      ) {
        this.colorBackground = 'black';
        this.backgroundService.color = this.colorBackground;
        this.colorText = 'white';
      }
    }
    console.log(this.colorText, this.colorBackground);
  }
}
