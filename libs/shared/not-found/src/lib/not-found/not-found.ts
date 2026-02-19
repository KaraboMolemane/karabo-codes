import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'portfolio-not-found',
  imports: [RouterModule, ButtonModule],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss',
})
export class NotFound {}
