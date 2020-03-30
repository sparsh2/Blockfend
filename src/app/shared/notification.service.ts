import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public submittedSnackBar: MatSnackBar) { }
  snackBarConfig: MatSnackBarConfig = {
    duration: 3000
  }
  openSnackBar(message: string, action: string) {
    this.snackBarConfig['panelClass'] = ['notification','success'];
    this.submittedSnackBar.open(message, '', this.snackBarConfig);
  }
}
