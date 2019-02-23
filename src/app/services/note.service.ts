import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NoteItem } from '../models/note-item';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private readonly URL_NOTES = environment.domain + '/notes/';

  constructor(private httpClient: HttpClient) { }

  buscarAsAnotacoes(): Observable<NoteItem[]> {
    return this.httpClient.get<NoteItem[]>(this.URL_NOTES);
  }

  criarAnotacao(noteItem: NoteItem): Observable<NoteItem> {
    return this.httpClient.post<NoteItem>(this.URL_NOTES, noteItem);
  }

  removerItem(noteItem: NoteItem) {
    return this.httpClient.delete(this.URL_NOTES + noteItem.id);
  }

  atualizarAnotacoes(noteItem: NoteItem) {
    return this.httpClient.put(this.URL_NOTES + noteItem.id, noteItem);
  }

}
