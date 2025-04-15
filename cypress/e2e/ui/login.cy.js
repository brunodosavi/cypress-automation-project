import { loginPage } from "../../pages/loginPage";

describe('Login Test - SauceDemo', () => {
    let users;

    beforeEach(() => {
        cy.fixture('users').then((data) => {
            users = data;
        });
    });

    it('should login successfully with valid credentials', () => {
        cy.loginViaUI(users.validUser.username, users.validUser.password);
        cy.url().should('include', 'inventory.html');
        cy.get('.inventory_item').should('have.length.greaterThan', 0);
        cy.contains('.inventory_item_name', 'Sauce Labs Backpack').should('be.visible');

    });

    it('should fail login with invalid credentials', () => {
        cy.loginViaUI(users.invalidUser.username, users.invalidUser.password);
        cy.get('[data-test="error-button"]').should('be.visible');
    })
})