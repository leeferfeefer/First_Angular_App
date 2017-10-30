import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  private title;
  private navItems;

  constructor() {
    this.title = 'Hello';
    this.navItems = ["About Me", "Projects"];
   }

  ngOnInit() {
    this.title = 'bob';    
  }

}
