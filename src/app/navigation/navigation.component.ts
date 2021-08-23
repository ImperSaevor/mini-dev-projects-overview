import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  displayNav!: boolean;
  beginnerListDisplay!: boolean;
  intermediateListDisplay!: boolean;
  proListDisplay!: boolean;

  constructor() { }

  ngOnInit(): void {
    this.displayNav = false;
    this.beginnerListDisplay = false;
    this.intermediateListDisplay = false;
    this.proListDisplay = false;
  }

  undisplayedNav(){
    this.displayNav = !this.displayNav;
    this.beginnerListDisplay = false;
    this.intermediateListDisplay = false;
    this.proListDisplay = false;
  }
  undisplayedBeginnerList(){
    this.beginnerListDisplay = !this.beginnerListDisplay;
  }
  undisplayedIntermediate(){
    this.intermediateListDisplay = !this.intermediateListDisplay;
  }
  undisplayedPro(){
    this.proListDisplay = !this.proListDisplay;
  }

}
