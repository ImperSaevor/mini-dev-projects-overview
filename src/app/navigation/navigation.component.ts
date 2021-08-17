import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  displayNav!: boolean;

  constructor() { }

  ngOnInit(): void {
    this.displayNav = true;
  }

  undisplayedNav(){
    this.displayNav = !this.displayNav;
  }

}
