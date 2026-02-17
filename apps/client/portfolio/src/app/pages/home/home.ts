import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { ChipModule } from 'primeng/chip';

interface TechHighlight {
  title: string;
  icon: string;
  description: string;
  technologies: string[];
}

interface Achievement {
  title: string;
  description: string;
  icon: string;
}

interface FeaturedProject {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  slug: string;
}

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    CardModule,
    CarouselModule,
    ChipModule,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  techHighlights: TechHighlight[] = [
    {
      title: 'Frontend Excellence',
      icon: 'pi pi-desktop',
      description:
        '4 years crafting responsive, performant React & Angular applications',
      technologies: ['Angular', 'React', 'TypeScript', 'RxJS', 'NgRx'],
    },
    {
      title: 'Backend Mastery',
      icon: 'pi pi-server',
      description:
        '2 years building scalable APIs and services with Node.js ecosystem',
      technologies: ['NestJS', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB'],
    },
    {
      title: 'Cloud & DevOps',
      icon: 'pi pi-cloud',
      description:
        'Experience with AWS services, CI/CD pipelines, and containerization',
      technologies: ['AWS S3', 'Docker', 'GitHub Actions', 'Electron'],
    },
  ];

  achievements: Achievement[] = [
    {
      title: '50+ Features Delivered',
      description:
        'Successfully shipped major features across multiple enterprise applications',
      icon: 'pi pi-check-circle',
    },
    {
      title: '70% Performance Improvement',
      description:
        'Optimized Angular applications reducing load times from 8s to 2.4s',
      icon: 'pi pi-bolt',
    },
    {
      title: 'Built Electron Installer',
      description:
        'Designed and implemented company-wide desktop application installer',
      icon: 'pi pi-download',
    },
    {
      title: 'Designed DB Schemas',
      description:
        'Created scalable database architectures for complex business domains',
      icon: 'pi pi-database',
    },
  ];

  featuredProjects: FeaturedProject[] = [
    {
      title: 'Enterprise Dashboard Platform',
      description:
        'A comprehensive analytics dashboard with real-time data visualization, custom reporting, and role-based access control.',
      image: 'assets/project-placeholder.svg',
      technologies: ['Angular', 'NestJS', 'PostgreSQL', 'Chart.js'],
      slug: 'enterprise-dashboard',
    },
    {
      title: 'File Download Manager',
      description:
        'Intelligent file downloader with resume capability, progress tracking, and AWS S3 integration for enterprise use.',
      image: 'assets/project-placeholder.svg',
      technologies: ['Node.js', 'AWS S3', 'Electron', 'TypeScript'],
      slug: 'file-download-manager',
    },
    {
      title: 'Authentication Microservice',
      description:
        'Secure authentication service with JWT, refresh tokens, RBAC, and OAuth integration for multiple applications.',
      image: 'assets/project-placeholder.svg',
      technologies: ['NestJS', 'PostgreSQL', 'Redis', 'Passport.js'],
      slug: 'auth-microservice',
    },
  ];

  testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechCorp',
      text: 'Karabo consistently delivers high-quality work ahead of schedule. His attention to detail and problem-solving skills are exceptional.',
      avatar: 'assets/avatar-placeholder.svg',
    },
    {
      name: 'Michael Chen',
      role: 'Lead Developer',
      company: 'InnovateSoft',
      text: 'Working with Karabo has been a pleasure. He brings both technical expertise and a collaborative mindset to every project.',
      avatar: 'assets/avatar-placeholder.svg',
    },
  ];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  downloadResume() {
    window.open('/resume/karabo-molemane.pdf', '_blank');
  }
}
