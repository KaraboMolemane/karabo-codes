import { Component, signal } from '@angular/core';

import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { RippleModule } from 'primeng/ripple';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'portfolio-layout',
  imports: [
    RouterModule,
    MenubarModule,
    ButtonModule,
    AvatarModule,
    RippleModule,
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
  mobileMenuVisible = signal(false);

  toggleMobileMenu() {
    this.mobileMenuVisible.update((v) => !v);
  }

  closeMobileMenu() {
    this.mobileMenuVisible.set(false);
  }

  menuItems: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      routerLink: '/',
    },
    {
      label: 'About',
      icon: 'pi pi-user',
      routerLink: '/about',
    },
    {
      label: 'Projects',
      icon: 'pi pi-briefcase',
      routerLink: '/projects',
    },
    {
      label: 'Experience',
      icon: 'pi pi-chart-line',
      routerLink: '/experience',
    },
    {
      label: 'Skills',
      icon: 'pi pi-star',
      routerLink: '/skills',
    },
    {
      label: 'Blog',
      icon: 'pi pi-book',
      routerLink: '/blog',
    },
    {
      label: 'System Designs',
      icon: 'pi pi-sitemap',
      routerLink: '/systems',
    },
    {
      label: 'Code Quality',
      icon: 'pi pi-code',
      routerLink: '/code-samples',
    },
    {
      label: 'Resume',
      icon: 'pi pi-file-pdf',
      routerLink: '/resume',
    },
    {
      label: 'Contact',
      icon: 'pi pi-envelope',
      routerLink: '/contact',
    },
  ];
}
