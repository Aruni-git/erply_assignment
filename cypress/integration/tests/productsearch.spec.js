/// <reference types="cypress" />

it("should navigate to the erply login page", () => {
  //App takes time to load longer than expected hence adding a timeout
  cy.visit("https://epos.erply.com/latest/");

  cy.wait(5000);
  cy.get("[data-testid=title]").should("be.visible");

  //enter client code
  cy.get('input[name="clientCode"]').type("104572");

  //enter user name
  cy.get('input[name="username"]').type("testassignment");

  //enter password
  cy.get('input[name="password"]').type("PosTestAssignment123");

  //click on sign in
  cy.get("[data-testid=login-clockin-title]").click();

  //assert
  cy.wait(5000);
  cy.get("[data-testid=title]").should("be.visible");

  //login done click the location
  cy.get("[data-testid=pos-item]").click();

  //click product serach bar
  cy.get("[data-testid=product-search-input] > #customer-search-input").click();

  //search an existing product by name
  cy.get("[data-testid=product-search-input] > #customer-search-input").type(
    "Fanta"
  );
  cy.wait(10000);

  //Ading the product
  cy.get("[data-testid=search-result-name]").should("have.text", "Fanta");
  cy.get("[data-testid=search-result-name]").click();

  //Assert
  cy.wait(8000);
  cy.contains("Fanta").should("be.visible");

  //search an existing product by code
  cy.get("[data-testid=product-search-input] > #customer-search-input")
    .clear()
    .type("001");
  cy.wait(8000);

  //Adding the product
  cy.contains("001").should("have.text", "001");
  cy.contains("001").click();

  //Assert
  cy.contains("001").should("be.visible");

  //search a non existing product by name
  cy.get("[data-testid=product-search-input] > #customer-search-input").type(
    "Cocacola"
  );
  cy.wait(8000);
  cy.contains("No results found.").should("have.text", "No results found.");

  //search a non existing product by code
  cy.get("[data-testid=product-search-input] > #customer-search-input")
    .clear()
    .type("0909");
  cy.wait(5000);
  cy.contains("No results found.").should("have.text", "No results found.");

  //Search an existing product by partial name
  cy.get("[data-testid=product-search-input] > #customer-search-input")
    .clear()
    .type("Banana");
    cy.get('[data-testid="search-result-product"][data-test-key="1"] > th.MuiTableCell-root > [data-testid=search-result-name]').should('not.be.null')

  //Search an existing product by partial code
  cy.get("[data-testid=product-search-input] > #customer-search-input")
    .clear()
    .type("00");
    cy.get('[data-testid="search-result-product"][data-test-key="1"] > th.MuiTableCell-root > [data-testid=search-result-name]').should('not.be.null')
});
