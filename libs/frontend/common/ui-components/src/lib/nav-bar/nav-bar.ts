import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';

@Component({
  selector: 'lib-nav-bar',
  imports: [Menubar],
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
      },
      {
        label: 'About Me',
        icon: 'pi pi-user',
      },
      {
        label: 'Projects',
        icon: 'pi pi-briefcase',
        items: [
          {
            label: 'Components',
            icon: 'pi pi-bolt',
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server',
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil',
          },
          {
            label: 'Templates',
            icon: 'pi pi-palette',
            items: [
              {
                label: 'Apollo',
                icon: 'pi pi-palette',
              },
              {
                label: 'Ultima',
                icon: 'pi pi-palette',
              },
            ],
          },
        ],
      },
      {
        label: 'Experience',
        icon: 'pi pi-building',
      },
      {
        label: 'Skills',
        icon: 'pi pi-desktop',
      },
      {
        label: 'System Design',
        icon: 'pi pi-objects-column',
      },
      {
        label: 'Code Quality',
        icon: 'pi pi-code',
      },
      {
        label: 'Resume',
        icon: 'pi pi-file',
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
      },
      {
        label: 'Admin',
        icon: 'pi pi-user-edit',
      },
    ];
  }
}
