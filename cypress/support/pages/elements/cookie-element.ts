import { CSS_PROPS } from '../../constants/types';

export default class Cookie {
    private get cookieElement() { return cy.get('.cookie'); }

    private get cookieBlock() { return cy.get('.cookie__block'); }

    private get cookieButton() { return cy.get('.cookie__button'); }

    public clickOnCookieButton = () => {
        this.cookieButton.click();
    }

    public checkCookieBlockVisibility = () => {
        this.cookieBlock.should('be.visible');
    }

    public checkCookieBlockCssDisplayValue = () => {
        this.cookieElement.should('have.css', CSS_PROPS.DISPLAY, 'none');
    }
}