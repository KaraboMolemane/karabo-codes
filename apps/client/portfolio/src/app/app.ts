import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBar } from '@karabo-codes/nav-bar';

@Component({
  imports: [RouterModule, NavBar],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'client/portfolio';
}
