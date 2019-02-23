import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-panel',
  templateUrl: './open-panel.component.html',
  styleUrls: ['./open-panel.component.css']
})
export class OpenPanelComponent implements OnInit {
  panelOpenState = false;
  constructor() { }

  ngOnInit() {
  }

}
