import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title;
  Drawer = true;
  SideMode = 'side';
  ShowMe = false;

  constructor(private router: Router, private breakpointObserver: BreakpointObserver) {

  }

  ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.Large, Breakpoints.Medium
    ]).subscribe(result => {
      if (result.matches) {
        this.SideMode = 'side';
        this.Drawer = true;
      } else {
        this.SideMode = 'over';
        this.Drawer = true;
      }
    });

    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.title = event.url.replace('/', '').replace('-', ' ');
        if (this.title === '') {
          this.title = 'Home';
        }
      }
    });

    setTimeout(() => this.ShowMe = true, 50);
  }

}
