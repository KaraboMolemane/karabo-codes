import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-blog',
  imports: [CommonModule, RouterModule, CardModule, ChipModule, ButtonModule],
  template: `
    <div class="blog-page">
      <h1>Blog</h1>
      <p class="lead">Technical articles and insights (Coming Soon)</p>
      <div class="blog-grid">
        @for (post of blogPosts; track post.slug) {
          <p-card>
            <h3>{{ post.title }}</h3>
            <p>{{ post.excerpt }}</p>
            <button
              pButton
              label="Read More"
              [routerLink]="['/blog', post.slug]"
            ></button>
          </p-card>
        }
      </div>
    </div>
  `,
  styles: [
    `
      .blog-page {
        h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        .lead {
          font-size: 1.25rem;
          margin-bottom: 3rem;
          color: var(--text-color-secondary);
        }
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
        }
      }
    `,
  ],
})
export class Blog {
  blogPosts = [
    {
      slug: 'angular-performance',
      title: 'Angular Performance Tips',
      excerpt: 'Learn how to optimize your Angular applications...',
    },
    {
      slug: 'nestjs-microservices',
      title: 'Building Microservices with NestJS',
      excerpt: 'A guide to creating scalable microservices...',
    },
  ];
}
