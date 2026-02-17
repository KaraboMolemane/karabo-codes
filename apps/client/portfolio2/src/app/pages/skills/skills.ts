import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';

interface Skill {
  name: string;
  category: string;
  level: number;
  yearsUsed: number;
  projects: number;
  size: number;
  color: string;
}

interface SkillTableItem {
  skill: string;
  proficiency: string;
  yearsExperience: number;
  projects: string;
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule, CardModule, TableModule, TagModule, TooltipModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skills: Skill[] = [
    // Frontend
    {
      name: 'Angular',
      category: 'Frontend',
      level: 95,
      yearsUsed: 4,
      projects: 25,
      size: 120,
      color: '#dd0031',
    },
    {
      name: 'TypeScript',
      category: 'Frontend',
      level: 95,
      yearsUsed: 4,
      projects: 30,
      size: 110,
      color: '#3178c6',
    },
    {
      name: 'React',
      category: 'Frontend',
      level: 80,
      yearsUsed: 2,
      projects: 15,
      size: 90,
      color: '#61dafb',
    },
    {
      name: 'RxJS',
      category: 'Frontend',
      level: 85,
      yearsUsed: 3,
      projects: 20,
      size: 85,
      color: '#b7178c',
    },
    {
      name: 'NgRx',
      category: 'Frontend',
      level: 75,
      yearsUsed: 2,
      projects: 10,
      size: 75,
      color: '#412846',
    },
    {
      name: 'SCSS',
      category: 'Frontend',
      level: 90,
      yearsUsed: 5,
      projects: 30,
      size: 80,
      color: '#cc6699',
    },
    // Backend
    {
      name: 'NestJS',
      category: 'Backend',
      level: 85,
      yearsUsed: 2,
      projects: 12,
      size: 100,
      color: '#e0234e',
    },
    {
      name: 'Node.js',
      category: 'Backend',
      level: 85,
      yearsUsed: 3,
      projects: 20,
      size: 100,
      color: '#339933',
    },
    {
      name: 'Express',
      category: 'Backend',
      level: 80,
      yearsUsed: 3,
      projects: 15,
      size: 85,
      color: '#000000',
    },
    {
      name: 'PostgreSQL',
      category: 'Database',
      level: 80,
      yearsUsed: 2,
      projects: 10,
      size: 90,
      color: '#336791',
    },
    {
      name: 'MongoDB',
      category: 'Database',
      level: 75,
      yearsUsed: 2,
      projects: 8,
      size: 80,
      color: '#47a248',
    },
    // Cloud & DevOps
    {
      name: 'AWS S3',
      category: 'Cloud',
      level: 70,
      yearsUsed: 1,
      projects: 6,
      size: 70,
      color: '#ff9900',
    },
    {
      name: 'Docker',
      category: 'DevOps',
      level: 65,
      yearsUsed: 1,
      projects: 5,
      size: 65,
      color: '#2496ed',
    },
    {
      name: 'Git',
      category: 'DevOps',
      level: 90,
      yearsUsed: 6,
      projects: 50,
      size: 95,
      color: '#f05032',
    },
    // Testing
    {
      name: 'Jest',
      category: 'Testing',
      level: 80,
      yearsUsed: 3,
      projects: 15,
      size: 75,
      color: '#c21325',
    },
    {
      name: 'Cypress',
      category: 'Testing',
      level: 70,
      yearsUsed: 1,
      projects: 5,
      size: 65,
      color: '#17202c',
    },
    // Other
    {
      name: 'Electron',
      category: 'Other',
      level: 75,
      yearsUsed: 1,
      projects: 3,
      size: 70,
      color: '#47848f',
    },
  ];

  frontendSkills: SkillTableItem[] = [
    {
      skill: 'Angular',
      proficiency: 'Expert',
      yearsExperience: 4,
      projects: '25+ enterprise applications',
    },
    {
      skill: 'TypeScript',
      proficiency: 'Expert',
      yearsExperience: 4,
      projects: '30+ projects',
    },
    {
      skill: 'React',
      proficiency: 'Advanced',
      yearsExperience: 2,
      projects: '15+ web applications',
    },
    {
      skill: 'RxJS',
      proficiency: 'Advanced',
      yearsExperience: 3,
      projects: '20+ reactive implementations',
    },
    {
      skill: 'NgRx',
      proficiency: 'Advanced',
      yearsExperience: 2,
      projects: '10+ state management solutions',
    },
  ];

  backendSkills: SkillTableItem[] = [
    {
      skill: 'NestJS',
      proficiency: 'Advanced',
      yearsExperience: 2,
      projects: '12+ microservices',
    },
    {
      skill: 'Node.js',
      proficiency: 'Advanced',
      yearsExperience: 3,
      projects: '20+ backend services',
    },
    {
      skill: 'Express',
      proficiency: 'Advanced',
      yearsExperience: 3,
      projects: '15+ REST APIs',
    },
    {
      skill: 'REST API Design',
      proficiency: 'Advanced',
      yearsExperience: 3,
      projects: '25+ API endpoints',
    },
  ];

  databaseSkills: SkillTableItem[] = [
    {
      skill: 'PostgreSQL',
      proficiency: 'Advanced',
      yearsExperience: 2,
      projects: '10+ database designs',
    },
    {
      skill: 'MongoDB',
      proficiency: 'Intermediate',
      yearsExperience: 2,
      projects: '8+ NoSQL implementations',
    },
    {
      skill: 'Redis',
      proficiency: 'Intermediate',
      yearsExperience: 1,
      projects: '5+ caching solutions',
    },
  ];

  cloudDevOpsSkills: SkillTableItem[] = [
    {
      skill: 'AWS S3',
      proficiency: 'Intermediate',
      yearsExperience: 1,
      projects: '6+ file storage implementations',
    },
    {
      skill: 'Docker',
      proficiency: 'Intermediate',
      yearsExperience: 1,
      projects: '5+ containerized applications',
    },
    {
      skill: 'Git & GitHub',
      proficiency: 'Expert',
      yearsExperience: 6,
      projects: '50+ repositories managed',
    },
    {
      skill: 'CI/CD',
      proficiency: 'Intermediate',
      yearsExperience: 2,
      projects: '10+ pipelines configured',
    },
  ];

  testingSkills: SkillTableItem[] = [
    {
      skill: 'Jest',
      proficiency: 'Advanced',
      yearsExperience: 3,
      projects: '15+ test suites',
    },
    {
      skill: 'Cypress',
      proficiency: 'Intermediate',
      yearsExperience: 1,
      projects: '5+ E2E test implementations',
    },
    {
      skill: 'Unit Testing',
      proficiency: 'Advanced',
      yearsExperience: 4,
      projects: '85% average coverage',
    },
  ];

  getProficiencyColor(proficiency: string): 'success' | 'info' | 'warn' | 'secondary' {
    const colors: { [key: string]: 'success' | 'info' | 'warn' | 'secondary' } = {
      Expert: 'success',
      Advanced: 'info',
      Intermediate: 'warn',
    };
    return colors[proficiency] || 'secondary';
  }
}
