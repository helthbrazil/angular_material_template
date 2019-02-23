import { Component, OnInit } from '@angular/core';
import { BuscaCepService } from './busca-cep.service';
import { Endereco } from './endereco';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-busca-cep',
  templateUrl: './busca-cep.component.html',
  styleUrls: ['./busca-cep.component.css']
})
export class BuscaCepComponent implements OnInit {
  dados = {
    cep: ''
  };
  showLoading = {
    mostrar: false
  };
  public mask = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/];

  constructor(private buscarCepService: BuscaCepService,
    public snackBar: MatSnackBar, fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });

  }
  endereco: Endereco;
  options: FormGroup;

  ngOnInit() {

  }

  buscarCep() {
    /* VALIDAR CEP */
    let cep: string = this.dados.cep;
    cep = cep.replace('_', '');
    if (cep.length !== 8) {
      this.messagemErro('Cep incompleto');
    } else {
      this.showLoading.mostrar = true;
      this.buscarCepService.buscarCep(this.dados.cep).subscribe(endereco => {
        const erro: boolean = endereco.erro;
        if (erro) {
          this.messagemErro('Cep inválido');
          this.endereco = undefined;
          this.showLoading.mostrar = false;
          return;
        }
        this.endereco = endereco;
        console.log(endereco);
        this.showLoading.mostrar = false;
      }, error => {
        console.error(error);
        this.messagemErro('Cep inválido');
      });
    }
  }

  private messagemErro(msg: string) {
    this.snackBar.open(msg, undefined, { duration: 3000 });
  }

}
