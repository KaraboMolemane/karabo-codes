import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ChipModule } from 'primeng/chip';

interface WorkExperience {
  company: string;
  role: string;
  period: string;
  location: string;
  technologies: string[];
  accomplishments: string[];
  type: 'current' | 'past';
}

interface KeyImpact {
  metric: string;
  description: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-experience',
  imports: [CommonModule, CardModule, TagModule, ChipModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  workHistory: WorkExperience[] = [
    {
      company: 'TechCorp Solutions',
      role: 'Senior Full-Stack Developer',
      period: 'Jan 2024 - Present',
      location: 'Remote',
      type: 'current',
      technologies: [
        'Angular',
        'NestJS',
        'PostgreSQL',
        'AWS',
        'Docker',
        'TypeScript',
      ],
      accomplishments: [
        'Led development of microservices architecture serving 100K+ active users',
        'Reduced API response times by 60% through database optimization and caching strategies',
        'Mentored team of 4 junior developers, improving code quality by 40% through PR reviews',
        'Designed and implemented RBAC system used across 5 enterprise applications',
        'Architected real-time notification system using WebSockets and Redis',
      ],
    },
    {
      company: 'InnovateSoft Inc',
      role: 'Frontend Lead Developer',
      period: 'Mar 2022 - Dec 2023',
      location: 'Hybrid',
      type: 'past',
      technologies: [
        'Angular',
        'React',
        'TypeScript',
        'NgRx',
        'RxJS',
        'Material UI',
      ],
      accomplishments: [
        'Built and maintained Angular component library used by 15+ development teams',
        'Improved application performance by 70%, reducing initial load time from 8s to 2.4s',
        'Led migration from AngularJS to Angular 14 for legacy application',
        'Implemented automated testing suite achieving 85% code coverage',
        'Created company-wide Angular coding standards and best practices documentation',
      ],
    },
    {
      company: 'DevWorks Agency',
      role: 'Full-Stack Developer',
      period: 'Jun 2020 - Feb 2022',
      location: 'On-site',
      type: 'past',
      technologies: ['Angular', 'Node.js', 'Express', 'MongoDB', 'Bootstrap'],
      accomplishments: [
        'Developed 20+ client websites and web applications from concept to deployment',
        'Created Electron desktop installer application used by 500+ enterprise clients',
        'Built custom CMS platform reducing content update time by 80%',
        'Integrated third-party APIs (Stripe, SendGrid, Twilio) for various client projects',
        'Collaborated with designers to implement pixel-perfect UI components',
      ],
    },
    {
      company: 'StartUp Ventures',
      role: 'Junior Frontend Developer',
      period: 'Jan 2019 - May 2020',
      location: 'On-site',
      type: 'past',
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'Git'],
      accomplishments: [
        'Developed responsive frontend interfaces for 10+ web applications',
        'Implemented cross-browser compatibility ensuring support for IE11+',
        'Created reusable UI components reducing development time by 30%',
        'Participated in agile development process with daily standups and sprint planning',
        'Gained foundational knowledge in web development best practices',
      ],
    },
  ];

  keyImpacts: KeyImpact[] = [
    {
      metric: '70% Performance Boost',
      description:
        'Reduced page load times through lazy loading, code splitting, and optimization',
      icon: 'pi pi-bolt',
      color: '#f59e0b',
    },
    {
      metric: 'Company-Wide Template',
      description:
        'Designed reusable Angular template adopted across entire organization',
      icon: 'pi pi-th-large',
      color: '#3b82f6',
    },
    {
      metric: 'Electron Installer',
      description:
        'Created desktop installer used by 500+ enterprise clients daily',
      icon: 'pi pi-download',
      color: '#8b5cf6',
    },
    {
      metric: '100K+ Active Users',
      description:
        'Built and maintained systems serving large-scale user bases',
      icon: 'pi pi-users',
      color: '#10b981',
    },
    {
      metric: '85% Code Coverage',
      description:
        'Implemented comprehensive testing suite with high code coverage',
      icon: 'pi pi-check-circle',
      color: '#06b6d4',
    },
    {
      metric: '4 Developers Mentored',
      description:
        'Guided junior developers improving team productivity and code quality',
      icon: 'pi pi-user-plus',
      color: '#ec4899',
    },
  ];
}
