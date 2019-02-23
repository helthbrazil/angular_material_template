import { Component, OnInit } from '@angular/core';
import { NoteItem } from '../models/note-item';
import { NoteService } from '../services/note.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { DialogNoteComponent } from '../dialogs/dialog-note/dialog-note.component';

@Component({
  selector: 'app-anotacoes',
  templateUrl: './anotacoes.component.html',
  styleUrls: ['./anotacoes.component.css']
})
export class AnotacoesComponent implements OnInit {

  public anotacoes: Array<NoteItem>;
  showLoading = {
    mostrar: false
  };

  constructor(private noteService: NoteService,
    public snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit() {
    this.showLoading.mostrar = true;
    this.anotacoes = new Array<NoteItem>();
    this.buscarAnotacoesMockup();
  }

  openDialog(): void {
    const initNote = new NoteItem(null, null, null);
    initNote.tituloDialog = 'Nova Anotação';

    const dialogRef = this.dialog.open(DialogNoteComponent, {
      width: '270px',
      data: initNote
    });

    dialogRef.afterClosed().subscribe((result: NoteItem) => {
      /*  this.noteService.criarAnotacao(new NoteItem(null, result.content, result.title)).subscribe(note => {
         console.log(note);
         // this.buscarAnotacoesMockup();
         this.snackBar.open('Anotação criada com sucesso', undefined, { duration: 3000 });
       }, error => {
         this.snackBar.open('Erro ao criar anotação', undefined, { duration: 3000 });
         console.error(error);
       }); */

      if (this.anotacoes) {
        this.anotacoes.push(new NoteItem(0, result.content, result.title));
      }

    });
  }

  public buscarAnotacoes() {
    this.noteService.buscarAsAnotacoes().subscribe(notes => {
      this.anotacoes = notes;
    }, error => {
      this.snackBar.open('Erro ao buscar anotações no servidor', undefined, { duration: 3000 });
      console.error(error);
    });
  }

  public buscarAnotacoesMockup() {
    const anotacoes = Array<NoteItem>();
    setTimeout(() => {
      for (let i = 1; i <= 3; i++) {
        anotacoes.push(new NoteItem(i, `Mensagem ${i}`, `titulo ${i}`));
      }
      this.anotacoes = anotacoes;
      this.showLoading.mostrar = false;
    }, 1000);
  }

  adicionarAnotacaoFake() {
    this.openDialog();
    /*   this.noteService.criarAnotacao(new NoteItem(null, 'Conteudo', 'titulo')).subscribe(note => {
        console.log(note);
        this.buscarAnotacoes();
        this.snackBar.open('Anotação criada com sucesso', undefined, { duration: 3000 });
      }, error => {
        console.error(error);
      }); */
  }
}
