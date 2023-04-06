import { COOKIES } from './constants/types';

Cypress.Commands.add('checkCookieProperty',
    (cookieName: COOKIES, property: string, value: string | number | boolean | undefined) => {
        cy.getCookie(cookieName).should('have.property', property, value)
});