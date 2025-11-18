import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { NavBar, NavBarService } from '@karabo-codes/nav-bar';

@Component({
  imports: [NxWelcome, RouterModule, NavBar],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'client/portfolio';
}
