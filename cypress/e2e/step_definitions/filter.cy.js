import { filter } from "../../support/pageObjects/filter";

const filterCommand = new filter();

When('filter result by date from "Past 24 hours"', () => {
  filterCommand.last24();
});

Then('there should be results from the "Past 24 hours"', () => {
  filterCommand.results24();
});

When(/filter result by date from (.*) to (.*)/, (from, to) => {
  filterCommand.customFilter(from, to);
});

Then(/there should be (.*) results from (.*) to (.*)/, (no, from, to) => {
  filterCommand.resultsCustom(no);
});
