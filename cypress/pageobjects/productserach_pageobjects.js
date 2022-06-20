export function login(clientCode, username, password) {
  cy.visit("https://epos.erply.com/latest/");

  //app is taking time to load hencce addding a wait
  cy.wait(5000);
  cy.get("[data-testid=title]").should("be.visible");

  //enter client code
  cy.get('input[name="clientCode"]').type(clientCode);

  //enter user name
  cy.get('input[name="username"]').type(username);

  //enter password
  cy.get('input[name="password"]').type(password);

  //click on sign in
  cy.get("[data-testid=login-clockin-title]").click();

  //assert
  cy.wait(5000);
  cy.get("[data-testid=title]").should("be.visible");
}

export function selectLocation() {
  cy.get("[data-testid=pos-item]").click();
}

export function clickProductSearchBar() {
  cy.get("[data-testid=product-search-input] > #customer-search-input").click();
}

export function searchExsistingProductByName(productName) {
  cy.get("[data-testid=product-search-input] > #customer-search-input").type(
    productName
  );
  cy.wait(10000);
  //Verify product is displaying in the search result
  cy.get("[data-testid=search-result-name]").should("have.text", productName);
}

export function searchExsistingProductByCode(productCode) {
  cy.get("[data-testid=product-search-input] > #customer-search-input")
    .clear()
    .type(productCode);
  cy.wait(8000);

  //Verify product is displaying in the search result
  cy.contains(productCode).should("have.text", productCode);
}

export function searchNonExsistingProductByName(nonExsistingProductName) {
  cy.get("[data-testid=product-search-input] > #customer-search-input").type(
    nonExsistingProductName
  );
  cy.wait(8000);

  //Verify product is not found
  cy.contains("No results found.").should("have.text", "No results found.");
}

export function searchNonExsistingProductByCode(nonExsistingProductCode) {
  cy.get("[data-testid=product-search-input] > #customer-search-input")
    .clear()
    .type(nonExsistingProductCode);
  cy.wait(8000);

  //Verify product is not found
  cy.contains("No results found.").should("have.text", "No results found.");
}

export function searchExsistingProductByPartialName(
  exsistingProductPartialName
) {
  cy.get("[data-testid=product-search-input] > #customer-search-input")
    .clear()
    .type(exsistingProductPartialName);

  //Verify search results is not null
  cy.get(
    '[data-testid="search-result-product"][data-test-key="1"] > th.MuiTableCell-root > [data-testid=search-result-name]'
  ).should("not.be.null");
}

export function searchExsistingProductByPartialcode(
  exsistingProductPartialCode
) {
  cy.get("[data-testid=product-search-input] > #customer-search-input")
    .clear()
    .type(exsistingProductPartialCode);

  //Verify search results is not null
  cy.get(
    '[data-testid="search-result-product"][data-test-key="1"] > th.MuiTableCell-root > [data-testid=search-result-name]'
  ).should("not.be.null");
}
