import { getGreeting } from '../support/app.po';

describe('portfolio-e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should display hero title', () => {
    // Verify the hero title is displayed on the home page
    getGreeting().contains(/Full-Stack Developer/);
  });

  it('should navigate to projects page', () => {
    // Click the "View Projects" button
    cy.contains('button', 'View Projects').click();
    
    // Verify we're on the projects page
    cy.url().should('include', '/projects');
    cy.contains('h1', 'Projects').should('be.visible');
  });

  it('should navigate using the menu', () => {
    // Click on the About link in the navigation
    cy.contains('a', 'About').click();
    
    // Verify we're on the about page
    cy.url().should('include', '/about');
  });
});
