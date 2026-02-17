import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Layout } from '@portfolio/shared/layout';

@Component({
  imports: [Layout, RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'portfolio';
}
