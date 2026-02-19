import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-systems',
  imports: [CommonModule, RouterModule, CardModule, ButtonModule],
  template: `
    <div class="systems-page">
      <h1>System Designs</h1>
      <p class="lead">Architecture diagrams and system design case studies</p>
      <div class="systems-grid">
        @for (system of systems; track system.slug) {
          <p-card>
            <h3>{{ system.title }}</h3>
            <p>{{ system.description }}</p>
            <button
              pButton
              label="View Details"
              [routerLink]="['/systems', system.slug]"
            ></button>
          </p-card>
        }
      </div>
    </div>
  `,
  styles: [
    `
      .systems-page {
        h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        .lead {
          font-size: 1.25rem;
          margin-bottom: 3rem;
          color: var(--text-color-secondary);
        }
        .systems-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
        }
      }
    `,
  ],
})
export class Systems {
  systems = [
    {
      slug: 'electron-installer',
      title: 'Electron Installer System',
      description: 'Desktop application installer architecture...',
    },
    {
      slug: 'file-downloader',
      title: 'File Download Manager',
      description: 'Resumable download system with S3 integration...',
    },
    {
      slug: 'auth-system',
      title: 'Authentication & RBAC',
      description: 'Comprehensive authentication and authorization system...',
    },
  ];
}
