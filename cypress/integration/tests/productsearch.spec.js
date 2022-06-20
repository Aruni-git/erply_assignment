/// <reference types="cypress" />

import {
  login,
  selectLocation,
  clickProductSearchBar,
  searchExsistingProductByName,
  searchExsistingProductByCode,
  searchNonExsistingProductByName,
  searchNonExsistingProductByCode,
  searchExsistingProductByPartialName,
  searchExsistingProductByPartialcode,
} from "../../pageobjects/productserach_pageobjects";

const clientCode = "104572";
const username = "testassignment";
const password = "PosTestAssignment123";

const productName = "Fanta";
const productCode = "001";
const nonExsistingProductName = "Cocacola";
const nonExsistingProductCode = "090";
const exsistingProductPartialName = "Banana";
const exsistingProductPartialCode = "00";

beforeEach(() => {
  login(clientCode, username, password);
});

it("verify product serach", () => {
  selectLocation();
  clickProductSearchBar();
  searchExsistingProductByName(productName);
  searchExsistingProductByCode(productCode);
  searchNonExsistingProductByName(nonExsistingProductName);
  searchNonExsistingProductByCode(nonExsistingProductCode);
  searchExsistingProductByPartialName(exsistingProductPartialName);
  searchExsistingProductByPartialcode(exsistingProductPartialCode);
});
