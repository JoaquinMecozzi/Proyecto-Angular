import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = 'admin';
  password: string = 'password';

  constructor(
    private dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === '12345678') {
      alert('Bienvenido');
      this.dialogRef.close(true);
      return true;
    } else {
      alert('Inválido');
      return false;
    }
  }
}