import { Component, HostListener, OnInit } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
})
export class MainpageComponent implements OnInit {
  experience: any;

  constructor( private share_serv:SharedService) {}
  events: object[] = [];
  menuitems: any;
  isMenuOpen:boolean=false
  ngOnInit(): void {
    this.events = this.share_serv.events
this.menuitems=this.share_serv.menu
    this.experience=this.share_serv.exp
  }
  togglemenu(){
    this.isMenuOpen=!this.isMenuOpen
  }
  liclk(){
    setTimeout(()=>{
this.isMenuOpen=false
    },100)
  }
  @HostListener('document:click', ['$event'])
  documentClickHandler(event: Event) {
    debugger
    if (!this.isMenuOpen) {
      return; 
    }
    const target = event.target as HTMLElement;
    if (!target.closest('.menu-wrapper')) {
      this.isMenuOpen = false; // Close menu if click is outside of the menu wrapper
    }
  }
  menuClickHandler(event: Event) {
    event.stopPropagation(); // Prevent click event propagation to the wrapper
  }
}
