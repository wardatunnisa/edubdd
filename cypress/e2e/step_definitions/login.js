import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";


Given("I open login page", () => {
  cy.visit("http://zero.webappsecurity.com/login.html");
});

When("I submit login", () => {
    cy.get('#user_login').type('username')
    cy.get('#user_password').type('password')

    cy.get('#user_remember_me').click()

    cy.get('input[name="submit"]').click()
});

Then("I should see homepage", () => {
  
});
