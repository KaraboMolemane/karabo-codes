import { Component } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'app-resume',
  imports: [ButtonModule, CardModule, ChipModule],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume {
  skills = [
    'Angular',
    'React',
    'TypeScript',
    'NestJS',
    'Node.js',
    'PostgreSQL',
    'MongoDB',
    'AWS',
    'Docker',
    'Git',
  ];

  downloadPDF() {
    window.open('/assets/resume/karabo-molemane.pdf', '_blank');
  }
}
