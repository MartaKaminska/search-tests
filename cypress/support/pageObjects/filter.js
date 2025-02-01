import { findDateFilter } from "../../fixtures/method";

export class filter {
  last24Hour = "#ow21 > div > g-menu > g-menu-item:nth-child(3)";
  results24Hour = "#rso";
  customDate = "#ow21 > div > g-menu > g-menu-item:nth-last-child()";
  fromField = "#OouJcb";
  toField = "#rzG2be";
  confirmBtn = "g-button";
  noSearchResult = "#result-stats";

  last24() {
    findDateFilter(this.last24Hour);
  }

  results24() {
    const regex = /\b(1[0-9]|2[0-4]|[1-9])\b/;

    cy.get(this.results24Hour)
      .children("div")
      .each(($ele) => {
        cy.wrap($ele)
          .find("span > span")
          .invoke("text")
          .then((text) => {
            const match = text.match(regex);
            if (match) {
              const number = parseInt(match[0], 10);
              cy.wrap(number).should("be.within", 1, 24);
            } else {
              cy.log(`Brak liczby od 1 do 24 w tekście: "${text}"`);
            }
          });
      });
  }

  customFilter(from, to) {
    findDateFilter(this.customDate).then(() => {
      cy.get(this.fromField).type(from);
      cy.get(this.toField).type(to);
      cy.get(this.confirmBtn).click();
    });
  }

  resultsCustom(no) {
    cy.get(this.noSearchResult).should("contain", no);
  }
}
