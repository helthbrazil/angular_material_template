import { Component, AfterViewInit, OnInit } from '@angular/core';
import {
  Router, NavigationStart, NavigationCancel, NavigationEnd
} from '@angular/router';

@Component({
  selector: 'app-angular-docs',
  templateUrl: './angular-docs.component.html',
  styleUrls: ['./angular-docs.component.css']
})
export class AngularDocsComponent implements OnInit {
  loading: boolean;

  constructor(private router: Router) {

  }


  ngOnInit(): void {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 500);
  }

}
