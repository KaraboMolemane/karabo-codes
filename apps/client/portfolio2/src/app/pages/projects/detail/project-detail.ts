import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

interface ProjectDetailData {
  slug: string;
  title: string;
  role: string;
  technologies: string[];
  problem: string;
  solution: string;
  result: string;
  architecture: string;
  codeSamples: CodeSample[];
  screenshots: string[];
  challenges: Challenge[];
  links: ProjectLink[];
}

interface CodeSample {
  title: string;
  language: string;
  code: string;
  description: string;
}

interface Challenge {
  title: string;
  description: string;
  lesson: string;
}

interface ProjectLink {
  type: string;
  url: string;
  label: string;
}

@Component({
  selector: 'app-project-detail',
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    ChipModule,
    ButtonModule,
    DividerModule,
  ],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetail implements OnInit {
  private route = inject(ActivatedRoute);
  
  projectSlug = signal<string>('');
  project = signal<ProjectDetailData | null>(null);

  // Mock project data (in real app, this would come from a service)
  projects: { [key: string]: ProjectDetailData } = {
    'enterprise-dashboard': {
      slug: 'enterprise-dashboard',
      title: 'Enterprise Dashboard Platform',
      role: 'Lead Full-Stack Developer',
      technologies: ['Angular 14', 'NestJS', 'PostgreSQL', 'Chart.js', 'WebSockets', 'Redis'],
      problem:
        'The client needed a comprehensive analytics platform to visualize complex business metrics in real-time for 10,000+ concurrent users. The existing solution was slow, difficult to customize, and lacked proper role-based access control.',
      solution:
        'Built a modern, scalable dashboard using Angular for the frontend with lazy-loaded modules, NestJS microservices for the backend, PostgreSQL for data persistence, and Redis for caching. Implemented WebSocket connections for real-time updates and created a flexible widget system allowing users to customize their dashboards.',
      result:
        'Achieved 90% improvement in load times, serving 10,000+ daily active users with 99.9% uptime. User satisfaction increased by 75% and the flexible architecture reduced time-to-market for new features by 60%.',
      architecture:
        'The system follows a microservices architecture with an Angular SPA frontend, NestJS API gateway, multiple specialized microservices (auth, analytics, notifications), PostgreSQL primary database, Redis cache layer, and WebSocket server for real-time communication.',
      codeSamples: [
        {
          title: 'Optimized Data Fetching with RxJS',
          language: 'typescript',
          code: `// Efficient data fetching with caching and error handling
private readonly cache$ = new BehaviorSubject<DashboardData | null>(null);

getDashboardData(userId: string): Observable<DashboardData> {
  // Return cached data if available and fresh
  if (this.cache$.value && this.isCacheFresh()) {
    return of(this.cache$.value);
  }

  return this.http.get<DashboardData>(\`/api/dashboard/\${userId}\`).pipe(
    tap(data => this.cache$.next(data)),
    catchError(error => {
      console.error('Dashboard fetch failed:', error);
      return throwError(() => new Error('Failed to load dashboard'));
    }),
    shareReplay(1)
  );
}`,
          description:
            'Implemented intelligent caching to reduce API calls by 70% and improve user experience.',
        },
        {
          title: 'Real-Time WebSocket Handler',
          language: 'typescript',
          code: `// NestJS WebSocket Gateway for real-time updates
@WebSocketGateway({ cors: true })
export class DashboardGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('subscribeToDashboard')
  handleSubscription(
    @ConnectedSocket() client: Socket,
    @MessageBody() { userId }: { userId: string }
  ) {
    client.join(\`dashboard-\${userId}\`);
    return { event: 'subscribed', data: { userId } };
  }

  emitDataUpdate(userId: string, data: any) {
    this.server.to(\`dashboard-\${userId}\`).emit('dataUpdate', data);
  }
}`,
          description:
            'WebSocket implementation enabling real-time dashboard updates without polling.',
        },
      ],
      screenshots: ['screenshot1.png', 'screenshot2.png'],
      challenges: [
        {
          title: 'Real-Time Data Synchronization',
          description:
            'Ensuring data consistency across multiple concurrent users viewing and editing the same dashboards presented significant challenges, especially with custom widget configurations.',
          lesson:
            'Learned to implement optimistic UI updates combined with event sourcing and WebSocket-based synchronization. This approach provided instant feedback while maintaining data consistency.',
        },
        {
          title: 'Performance at Scale',
          description:
            'Initial implementation struggled with rendering large datasets and multiple chart widgets simultaneously, causing browser freezes.',
          lesson:
            'Implemented virtual scrolling, lazy loading of widgets, and Web Workers for heavy computations. This reduced main thread blocking by 90% and enabled smooth 60fps rendering.',
        },
      ],
      links: [
        { type: 'demo', url: '#', label: 'Live Demo' },
        { type: 'github', url: '#', label: 'View Code' },
      ],
    },
    // Add more projects here (shortened for brevity)
  };

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const slug = params['slug'];
      this.projectSlug.set(slug);
      this.project.set(this.projects[slug] || null);
    });
  }
}
