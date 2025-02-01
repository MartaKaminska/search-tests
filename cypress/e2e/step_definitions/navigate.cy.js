Given(/I navigate to "(.*)"/, (url) => {
  cy.visit(url);
});

And("reject cookie policy", () => {
  cy.get("#W0wltc").click()
})