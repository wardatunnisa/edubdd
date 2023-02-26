import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";

Given('saya berada dihalaman utama', () => {
    cy.visit("http://zero.webappsecurity.com/");
})

When('saya mengetik "Cypress" di kotak Pencaharian', () => {
    cy.get('#searchTerm').type("Cypress{enter}")
})

Then('saya harus melihat hasil dari pencahariannya', () => {
    cy.get('h2').should('have.text', 'Search Results:')
})
