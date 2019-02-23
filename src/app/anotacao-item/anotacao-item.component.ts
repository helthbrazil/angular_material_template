import { Component, OnInit, Input } from '@angular/core';
import { NoteItem } from '../models/note-item';
import { TranslateService } from 'ng2-translate';
import { NoteService } from '../services/note.service';
import { AnotacoesComponent } from '../anotacoes/anotacoes.component';
import { MatSnackBar, MatDialog } from '@angular/material';
import { ConfirmacaoDialogComponent } from '../dialogs/confirmacao-dialog/confirmacao-dialog.component';
import { DialogNoteComponent } from '../dialogs/dialog-note/dialog-note.component';

@Component({
  selector: 'app-anotacao-item',
  templateUrl: './anotacao-item.component.html',
  styleUrls: ['./anotacao-item.component.css']
})
export class AnotacaoItemComponent implements OnInit {
  @Input() item: NoteItem;
  @Input() anotacoesComponent: AnotacoesComponent;

  constructor(public translateService: TranslateService,
    private noteService: NoteService, public snackBar: MatSnackBar,
    public dialog: MatDialog) { }

  ngOnInit() {
  }

  removerItem(): void {
    const dialogRef = this.dialog.open(ConfirmacaoDialogComponent, {
      width: '250px',
      data: {
        titulo: 'Deseja realmente remover esta anotação?'
      }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        /*   this.noteService.removerItem(this.item).subscribe(res => {
            // this.anotacoesComponent.buscarAnotacoes();
            if (this.anotacoesComponent.anotacoes) {
              const index = this.anotacoesComponent.anotacoes.findIndex(item => item === this.item);
              if (index !== -1) {
                this.anotacoesComponent.anotacoes.splice(index, 1);
              }
            }

            this.snackBar.open('Anotação excluída com sucesso', undefined, { duration: 3000 });
            console.log(res);
          }, error => {
            console.error(error);
          }); */

        if (this.anotacoesComponent.anotacoes) {
          const index = this.anotacoesComponent.anotacoes.findIndex(r => r.id === this.item.id);
          if (index !== -1) {
            this.anotacoesComponent.anotacoes.splice(index, 1);
          }
        }
      }
    });
  }

  editarItem(): void {
    const noteItem = { ...this.item };
    noteItem.tituloDialog = 'Editar Anotação';
    const dialogRef = this.dialog.open(DialogNoteComponent, {
      width: '270px',
      data: noteItem
    });

    dialogRef.afterClosed().subscribe((result: NoteItem) => {
      if (result) {
        /*  this.noteService.atualizarAnotacoes(noteItem).subscribe(res => {
           // this.anotacoesComponent.buscarAnotacoes();
           if (this.anotacoesComponent.anotacoes) {
             const index = this.anotacoesComponent.anotacoes.findIndex(item => item.id === noteItem.id);
             if (index !== -1) {
               this.anotacoesComponent.anotacoes[index] = noteItem;
             }
           }
           this.snackBar.open('Anotação atualizada com sucesso', undefined, { duration: 3000 });
         }, error => {
           this.snackBar.open('Erro ao atualizar anotação', undefined, { duration: 3000 });
         }); */

        this.item = result;

      }
    });


  }

}
