import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterModule],
  styleUrls: ['./app.component.css'],
  standalone: true
})
export class AppComponent {
  title = 'Cadastro e Login';
}
