import { Component, OnInit, Inject, ViewChildren, AfterViewInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NoteItem } from 'src/app/models/note-item';

@Component({
  selector: 'app-dialog-note',
  templateUrl: './dialog-note.component.html',
  styleUrls: ['./dialog-note.component.css']
})
export class DialogNoteComponent implements AfterViewInit {
  @ViewChildren('title') title;

  constructor(
    public dialogRef: MatDialogRef<DialogNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: NoteItem) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngAfterViewInit(): void {
    this.title.first.nativeElement.focus();
  }

}
