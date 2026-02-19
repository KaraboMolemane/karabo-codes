import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Layout } from '@shared/layout';

@Component({
  selector: 'app-root',
  imports: [Layout, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'portfolio';
}
