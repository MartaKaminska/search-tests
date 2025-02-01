export class search {
  searchField = 'textarea[id="APjFqb"]';
  results = "#search > div > div > div";
  sponsored = "#taw";
  infoPanel = "#kp-wp-tab-overview";

  type(phrase) {
    cy.get(this.searchField).type(phrase);
  }

  clickEnter() {
    cy.get(this.searchField).type("{enter}");
  }

  results(phrase) {
    cy.get(this.results).children("div").each(($ele, index) => {
        cy.wrap($ele).should("contain", phrase)
    })
  }

  sponsored(phrase) {
    cy.get(this.sponsored).should("contain", phrase);
  }

  address(address) {
    cy.get(this.infoPanel).should("contain", address);
  }
}
