import { search } from "../../support/pageObjects/search";

const searchCommand = new search();

When(/type (.*) into the search bar in (.*)/, (phrase, browse) => {
  searchCommand.type(phrase, browse);
});

When(/press Enter in (.*)/, (browse) => {
  searchCommand.clickEnter(browse);
});

Then(/there should be some search results that are relevant to (.*)/, (phrase) => {
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
