export class search {
  searchFieldGoogle = 'textarea[id="APjFqb"]';
  searchFieldBing = 'textarea[id="sb_form_q"]';
  results = "#search > div > div > div";
  sponsored = "#taw";
  infoPanel = "#kp-wp-tab-overview";

  type(phrase, browse) {
    const selector =
      browse === "Google" ? this.searchFieldGoogle : this.searchFieldBing;
    cy.get(selector).type(phrase);
  }

  clickEnter(browse) {
    const selector =
      browse === "Google" ? this.searchFieldGoogle : this.searchFieldBing;
    cy.get(selector).type("{enter}");
  }

  results(phrase) {
    cy.get(this.results)
      .children("div")
      .each(($ele, index) => {
        cy.wrap($ele).should("contain", phrase);
      });
  }

  sponsored(phrase) {
    cy.get(this.sponsored).should("contain", phrase);
  }

  address(address) {
    cy.get(this.infoPanel).should("contain", address);
  }
}
