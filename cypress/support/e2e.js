// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

describe("Portfolio App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("ana sayfa başarıyla açılır", () => {
    cy.contains("Atilla Bilgi").should("be.visible");
  });

  it("skills bölümü görünür", () => {
    cy.get('[data-cy="skills-section"]').should("be.visible");
  });

  it("language toggle çalışır", () => {
    cy.get('[data-cy="lang-toggle"]').click();
    cy.contains("Yetenekler").should("be.visible");
  });

  it("dark mode toggle çalışır", () => {
    cy.get('[data-cy="theme-toggle"]').click();
    cy.get("html").should("have.class", "dark");
  });

  it("projects bölümü görünür ve en az 1 proje kartı vardır", () => {
    cy.get('[data-cy="projects-section"]').should("be.visible");
    cy.get('[data-cy="project-card"]').should("have.length.at.least", 1);
  });
});