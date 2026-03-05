import { Component } from '@angular/core';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-admin',
  imports: [CardModule, ButtonModule, TableModule],
  template: `
    <div class="admin-page">
      <h1>Admin Dashboard</h1>
      <p class="lead">Manage portfolio content (Protected)</p>
      <div class="admin-grid">
        <p-card>
          <h3>Projects</h3>
          <button pButton label="Add Project" icon="pi pi-plus"></button>
        </p-card>
        <p-card>
          <h3>Blog Posts</h3>
          <button pButton label="Add Post" icon="pi pi-plus"></button>
        </p-card>
        <p-card>
          <h3>Content Management</h3>
          <p>Quick actions and statistics</p>
        </p-card>
      </div>
    </div>
  `,
  styles: [
    `
      .admin-page {
        h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        .lead {
          font-size: 1.25rem;
          margin-bottom: 3rem;
          color: var(--text-color-secondary);
        }
        .admin-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }
      }
    `,
  ],
})
export class Admin {}
