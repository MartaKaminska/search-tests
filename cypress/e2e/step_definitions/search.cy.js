import { search } from "../../support/pageObjects/search";

const searchCommand = new search();

When(/type (.*) into the search bar/, (phrase) => {
  searchCommand.type(phrase);
});

When("press Enter", () => {
  searchCommand.clickEnter();
});

Then(/there should be some results of search that are relevant to (.*)/, (phrase) => {
  searchCommand.results(phrase);
});

Then(/there should be (.*) result in the sponsored category/, (phrase) => {
  searchCommand.sponsored(phrase);
});

Then(
  /there should be information with the address <address> in the side panel/,
  (address) => {
    searchCommand.address(address);
  }
);
