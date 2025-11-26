import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';

@Component({
  selector: 'lib-nav-bar',
  imports: [Menubar, RouterModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/',
      },
      {
        label: 'About Me',
        icon: 'pi pi-user',
        routerLink: '/about',
      },
      {
        label: 'Projects',
        icon: 'pi pi-briefcase',
        items: [
          {
            label: 'Components',
            icon: 'pi pi-bolt',
            routerLink: '/projects/components',
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server',
            routerLink: '/projects/blocks',
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil',
            routerLink: '/projects/ui-kit',
          },
          {
            label: 'Templates',
            icon: 'pi pi-palette',
            items: [
              {
                label: 'Apollo',
                icon: 'pi pi-palette',
                routerLink: '/projects/templates/apollo',
              },
              {
                label: 'Ultima',
                icon: 'pi pi-palette',
                routerLink: '/projects/templates/ultima',
              },
            ],
          },
        ],
      },
      {
        label: 'Experience',
        icon: 'pi pi-building',
        routerLink: '/experience',
      },
      {
        label: 'Skills',
        icon: 'pi pi-desktop',
        routerLink: '/skills',
      },
      {
        label: 'System Design',
        icon: 'pi pi-objects-column',
        routerLink: '/system-design',
      },
      {
        label: 'Code Quality',
        icon: 'pi pi-code',
        routerLink: '/code-quality',
      },
      {
        label: 'Resume',
        icon: 'pi pi-file',
        routerLink: '/resume',
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        routerLink: '/contact',
      },
      {
        label: 'Admin',
        icon: 'pi pi-user-edit',
        routerLink: '/admin',
      },
    ];
  }
}
