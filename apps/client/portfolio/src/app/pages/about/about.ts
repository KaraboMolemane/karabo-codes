import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';
import { ChipModule } from 'primeng/chip';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface Value {
  icon: string;
  title: string;
  description: string;
}

interface ThinkingCard {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  imports: [CommonModule, CardModule, TimelineModule, ChipModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  timeline: TimelineEvent[] = [
    {
      year: '2015-2018',
      title: 'Learning Fundamentals',
      description:
        'Started my journey into programming, mastering the fundamentals of web development and computer science principles.',
      icon: 'pi pi-book',
      color: '#9C27B0',
    },
    {
      year: '2018-2022',
      title: 'Frontend Developer',
      description:
        'Specialized in frontend development with React and Angular, building responsive and performant web applications for enterprise clients.',
      icon: 'pi pi-desktop',
      color: '#673AB7',
    },
    {
      year: '2022-2024',
      title: 'Full-Stack Expansion',
      description:
        'Expanded into backend development with Node.js and NestJS, designing APIs, databases, and complete application architectures.',
      icon: 'pi pi-server',
      color: '#3F51B5',
    },
    {
      year: '2024-Present',
      title: 'Senior Full-Stack Engineer',
      description:
        'Leading complex projects, mentoring developers, and architecting scalable solutions across the entire stack.',
      icon: 'pi pi-star',
      color: '#2196F3',
    },
  ];

  values: Value[] = [
    {
      icon: 'pi pi-code',
      title: 'Clean Code',
      description:
        'I believe in writing maintainable, readable code that the next developer will thank you for.',
    },
    {
      icon: 'pi pi-users',
      title: 'Teaching & Mentoring',
      description:
        'Sharing knowledge and helping others grow is one of the most rewarding parts of development.',
    },
    {
      icon: 'pi pi-shield',
      title: 'Ownership',
      description:
        'Taking full responsibility for features from conception to deployment and beyond.',
    },
    {
      icon: 'pi pi-chart-line',
      title: 'Long-term Thinking',
      description:
        'Building solutions that scale and evolve, not just quick fixes that create technical debt.',
    },
  ];

  thinkingCards: ThinkingCard[] = [
    {
      icon: 'pi pi-lightbulb',
      title: 'Problem-Solving',
      description:
        'I break down complex problems into smaller, manageable pieces. Understanding the "why" is just as important as the "how".',
    },
    {
      icon: 'pi pi-search',
      title: 'Debugging',
      description:
        'Systematic approach to finding root causes. I use logging, breakpoints, and process of elimination to track down even the trickiest bugs.',
    },
    {
      icon: 'pi pi-sitemap',
      title: 'Architecture Decisions',
      description:
        'I consider scalability, maintainability, and team capabilities. Every technical decision is a trade-off, and I document the reasoning.',
    },
  ];
}
