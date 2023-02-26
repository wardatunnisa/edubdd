import LoginPage from "../run_test/login.test";
import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

Given("I open login page", () => {
  LoginPage.visit();
});

When("I submit login", () => {
  LoginPage.fillUsername('username');
  LoginPage.fillPassword('password');
  LoginPage.signIn();
});

Then("I should see homepage", () => {
  cy.get('#account_summary_tab').should('be.visible')
});
