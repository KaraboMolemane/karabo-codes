import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./pages/projects/projects').then((m) => m.Projects),
  },
  {
    path: 'projects/:slug',
    loadComponent: () =>
      import('./pages/projects/detail/project-detail').then(
        (m) => m.ProjectDetail,
      ),
  },
  {
    path: 'experience',
    loadComponent: () =>
      import('./pages/experience/experience').then((m) => m.Experience),
  },
  {
    path: 'skills',
    loadComponent: () => import('./pages/skills/skills').then((m) => m.Skills),
  },
  {
    path: 'blog',
    loadComponent: () => import('./pages/blog/blog').then((m) => m.Blog),
  },
  {
    path: 'blog/:slug',
    loadComponent: () => import('./pages/blog/blog').then((m) => m.Blog),
  },
  {
    path: 'systems',
    loadComponent: () =>
      import('./pages/systems/systems').then((m) => m.Systems),
  },
  {
    path: 'systems/:slug',
    loadComponent: () =>
      import('./pages/systems/systems').then((m) => m.Systems),
  },
  {
    path: 'code-samples',
    loadComponent: () =>
      import('./pages/code-samples/code-samples').then((m) => m.CodeSamples),
  },
  {
    path: 'resume',
    loadComponent: () => import('./pages/resume/resume').then((m) => m.Resume),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact').then((m) => m.Contact),
  },
  {
    path: 'admin',
    loadComponent: () => import('./pages/admin/admin').then((m) => m.Admin),
  },
  {
    path: '**',
    loadComponent: () =>
      import('@portfolio/shared/not-found').then((m) => m.NotFound),
  },
];
