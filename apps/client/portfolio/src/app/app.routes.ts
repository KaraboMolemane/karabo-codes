import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./home/home').then((m) => m.Home),
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about').then((m) => m.About),
  },
  {
    path: 'projects/components',
    loadComponent: () =>
      import('./projects/components/components').then((m) => m.Components),
  },
  {
    path: 'projects/blocks',
    loadComponent: () =>
      import('./projects/blocks/blocks').then((m) => m.Blocks),
  },
  {
    path: 'projects/ui-kit',
    loadComponent: () =>
      import('./projects/ui-kit/ui-kit').then((m) => m.UiKit),
  },
  // {
  //     path: 'projects/templates/apollo',
  //     loadComponent: () => import('./projects/templates/apollo/apollo').then(m => m.Apollo),
  // },
  // {
  //     path: 'projects/templates/ultima',
  //     loadComponent: () => import('./projects/templates/ultima/ultima').then(m => m.Ultima),
  // },
  // {
  //     path: 'experience',
  //     loadComponent: () => import('./experience/experience').then(m => m.Experience),
  // },
  {
    path: 'skills',
    loadComponent: () => import('./skills/skills').then((m) => m.Skills),
  },
  {
    path: 'experience',
    loadComponent: () =>
      import('./experience/experience').then((m) => m.Experience),
  },
  {
    path: 'system-design',
    loadComponent: () =>
      import('./system-design/system-design').then((m) => m.SystemDesign),
  },
  {
    path: 'code-quality',
    loadComponent: () =>
      import('./code-quality/code-quality').then((m) => m.CodeQuality),
  },
  {
    path: 'resume',
    loadComponent: () => import('./resume/resume').then((m) => m.Resume),
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact').then((m) => m.Contact),
  },
  {
    path: 'admin',
    loadComponent: () => import('./admin/admin').then((m) => m.Admin),
  },
];
