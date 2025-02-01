Given(/navigate to "(.*)"/, (url) => {
  cy.visit(url);
});

And(/reject cookie policy for (.*)/, (browse) => {
  if (browse === "Google") cy.get("#W0wltc").click();
  else if (browse === "Bing") cy.get("#bnp_btn_reject").click();
});
