import { loginPage } from "../pages/loginPage";

Cypress.Commands.add('loginViaUI', (username, password) => {
    loginPage.visit();
    loginPage.login(username, password);
});