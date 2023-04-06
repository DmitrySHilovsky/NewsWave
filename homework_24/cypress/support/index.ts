// <reference types="cypress />
import "@shelex/cypress-allure-plugin";
import "./commands";
import { COOKIES } from "./constants/types";

require("@cypress/xpath");

declare global {
  namespace Cypress {
    interface Chainable {
      checkCookieProperty(
        cookieName: COOKIES,
        property: string,
        value: string | number | boolean | undefined
      ): void;
    }
  }
}

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
