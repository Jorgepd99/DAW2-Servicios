import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {HashServiceService} from '../../services/hash-service.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.sass']
})
export class DisplayComponent implements OnInit {

  constructor(private hashService: HashServiceService, public dialog: MatDialog) { }

  text = '';

  options = [
    'Pasar a mayúsculas',
    'Pasar a minúsculas',
    'Tamaño del texto',
    'Los diez primeros caracteres',
    'Los diez últimos caracteres',
  ];

  selectedAlgorithm: String = '';

  hash: String = '';

  updateHash(): void {
    this.hash = this.text ? this.hashService.hash(this.text, this.selectedAlgorithm) : '';
  }
  
  clearTextArea(): void{
      window.location.reload();
  }

  openInfoPanel(): void {
    const dialogRef = this.dialog.open(DialogContentInfo);
  }

  ngOnInit(): void {
  }
}

@Component({
  selector:'dialog-content-info',
  templateUrl: 'dialog-content-info.html'
})
export class DialogContentInfo{}