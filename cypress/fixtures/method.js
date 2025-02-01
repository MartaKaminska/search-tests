export const findDateFilter = (time) => {
  const tools = "#hdtb-tls";
  const timeFilter = "#ow21";

  cy.get(tools)
    .click()
    .then(() => {
      cy.get(timeFilter)
        .click()
        .then(() => {
          cy.get(time).click();
        });
    });
};
