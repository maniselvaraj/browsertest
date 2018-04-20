const assert = require('assert');


describe('Home Page', function () {
  it('should let you launch home page', function () {
	  // launch AMEX page
	  browser.url('/us/credit-cards/business/business-credit-cards');


	  // validate title
	  const title = browser.getTitle();
	  assert.equal(title, 'Business Credit Cards from American Express | Apply Now');

	  // count cards with "Special Offer"

	  // click on Business Platinum Card

	  // Validate title "The Business Platinum Card® from American Express"

	  // close browser
  })
})