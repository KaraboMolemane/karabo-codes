import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { ButtonModule } from 'primeng/button';
import { Select } from 'primeng/select';
import { FormsModule } from '@angular/forms';

interface Project {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  role: string;
  tags: string[];
  image: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    ChipModule,
    ButtonModule,
    Select,
    FormsModule,
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  selectedFilter = signal<string>('all');

  filterOptions = [
    { label: 'All Projects', value: 'all' },
    { label: 'Frontend', value: 'Frontend' },
    { label: 'Backend', value: 'Backend' },
    { label: 'Full-Stack', value: 'Fullstack' },
    { label: 'Performance', value: 'Performance' },
    { label: 'Cloud', value: 'Cloud' },
  ];

  allProjects: Project[] = [
    {
      slug: 'enterprise-dashboard',
      title: 'Enterprise Dashboard Platform',
      description:
        'Comprehensive analytics dashboard with real-time data visualization, custom reporting, and role-based access control.',
      fullDescription:
        'A full-featured enterprise dashboard serving 10,000+ daily active users.',
      technologies: [
        'Angular',
        'NestJS',
        'PostgreSQL',
        'Chart.js',
        'WebSockets',
      ],
      role: 'Lead Developer',
      tags: ['Fullstack', 'Performance', 'Architecture'],
      image: 'assets/projects/dashboard.svg',
      featured: true,
    },
    {
      slug: 'file-download-manager',
      title: 'Intelligent File Download Manager',
      description:
        'Enterprise file downloader with resume capability, progress tracking, and AWS S3 integration.',
      fullDescription:
        'Built for 500+ enterprise clients requiring reliable file transfers.',
      technologies: ['Node.js', 'AWS S3', 'Electron', 'TypeScript'],
      role: 'Full-Stack Developer',
      tags: ['Backend', 'Cloud', 'Electron'],
      image: 'assets/projects/downloader.svg',
      featured: true,
    },
    {
      slug: 'auth-microservice',
      title: 'Authentication Microservice',
      description:
        'Secure authentication service with JWT, refresh tokens, RBAC, and OAuth integration.',
      fullDescription:
        'Handles authentication for multiple applications with 100K+ users.',
      technologies: ['NestJS', 'PostgreSQL', 'Redis', 'Passport.js'],
      role: 'Backend Developer',
      tags: ['Backend', 'Architecture'],
      image: 'assets/projects/auth.svg',
      featured: true,
    },
    {
      slug: 'component-library',
      title: 'Angular Component Library',
      description:
        'Reusable UI component library following atomic design principles, used by 15+ development teams.',
      fullDescription:
        'Created standardized components improving development speed by 40%.',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Storybook'],
      role: 'Frontend Lead',
      tags: ['Frontend', 'UI/UX'],
      image: 'assets/projects/components.svg',
      featured: false,
    },
    {
      slug: 'real-time-chat',
      title: 'Real-Time Chat Application',
      description:
        'Scalable chat platform with WebSocket support, typing indicators, and message persistence.',
      fullDescription:
        'Supports 1000+ concurrent users with real-time messaging.',
      technologies: ['Angular', 'NestJS', 'WebSockets', 'MongoDB'],
      role: 'Full-Stack Developer',
      tags: ['Fullstack', 'Performance'],
      image: 'assets/projects/chat.svg',
      featured: false,
    },
    {
      slug: 'e-commerce-platform',
      title: 'E-Commerce Platform',
      description:
        'Full-featured online store with cart management, payment integration (Stripe), and order tracking.',
      fullDescription: 'Processes 1000+ orders per month with 99.9% uptime.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      role: 'Full-Stack Developer',
      tags: ['Fullstack', 'Cloud'],
      image: 'assets/projects/ecommerce.svg',
      featured: false,
    },
    {
      slug: 'performance-optimization',
      title: 'Application Performance Optimization',
      description:
        'Comprehensive performance improvement project reducing load times by 70% through various optimization techniques.',
      fullDescription:
        'Reduced initial load from 8s to 2.4s improving user experience significantly.',
      technologies: ['Angular', 'Webpack', 'Lazy Loading', 'CDN'],
      role: 'Performance Engineer',
      tags: ['Frontend', 'Performance'],
      image: 'assets/projects/performance.svg',
      featured: false,
    },
    {
      slug: 'data-visualization-tool',
      title: 'Advanced Data Visualization Tool',
      description:
        'Interactive data visualization platform with customizable charts, filters, and export capabilities.',
      fullDescription:
        'Visualizes complex datasets with D3.js and custom visualizations.',
      technologies: ['Angular', 'D3.js', 'TypeScript', 'RxJS'],
      role: 'Frontend Developer',
      tags: ['Frontend', 'UI/UX'],
      image: 'assets/projects/dataviz.svg',
      featured: false,
    },
  ];

  get filteredProjects(): Project[] {
    if (this.selectedFilter() === 'all') {
      return this.allProjects;
    }
    return this.allProjects.filter((project) =>
      project.tags.includes(this.selectedFilter()),
    );
  }
}
