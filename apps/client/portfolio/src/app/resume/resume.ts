import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-resume',
  imports: [CardModule],
  templateUrl: './resume.html',
  styleUrl: './resume.css',
})
export class Resume {}
