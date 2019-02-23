import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() showLoading: any;
  countButton: number;
  countSnackBar: number;

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.countButton = 0;
    this.countSnackBar = 0;
  }

  actionSnackBar() {
    this.countSnackBar += 1;
    this.snackBar.open(`Exemplo de Snackbar blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá
    blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá`, undefined, { duration: 2000 });
  }

  action() {
    this.countButton++;
    this.showLoading.mostrar = true;
    setTimeout(() => {
      this.showLoading.mostrar = false;
    }, 3000);
  }
}
