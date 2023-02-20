Cypress.Commands.add("getByData", (selector) => {
    return cy.get(`[data-test=${selector}]`)
})

Cypress.Commands.add("login", (email, password) => {
    cy.session([email, password], () => {
        cy.visit("http://localhost:3000/");
        cy.get("#qsLoginBtn").click();

        cy.origin(
            "https://myusername.auth0.com/",
            { args: [email, password] },
            ([email, password]) => {
                cy.get("#1-email").type(email);
                cy.get("input[type='password']").type(password);
                cy.get("button[type='submit']").click();
            }
        );

        cy.get("h1").should("contain", "React.js Sample Project");
    });
});