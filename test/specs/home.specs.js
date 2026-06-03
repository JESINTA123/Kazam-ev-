const homeScreen = require('../screenobjects/android/home.screen');

describe('Home Screen ', () => {
  // it('should click quick Filters', async () => {
  //   await homeScreen.clickQuickFilters();
  // });

  it.only('should click on search chargers', async () => {
    await homeScreen.clickSearchChargers();
  });

  it('should enter location', async () => {
    await homeScreen.enterLocation('Koramangala');
  });

  it('should select first suggestion', async () => {
    await homeScreen.selectSuggestion('Koramangala');
  });

  it('should verify EV card is displayed', async () => {
    const isDisplayed = await homeScreen.verifyEvCardDisplayed();
    expect(isDisplayed).toBe(true);
  });

  it('should click on filter', async () => {
    await homeScreen.clickFilter();
  });

  it('should verify filter options are displayed', async () => {
    const hasOptions = await homeScreen.verifyFilterOptionsDisplayed();
    expect(hasOptions).toBe(true);
  });

  it('should click on network', async () => {
    await homeScreen.clickNetwork();
  });

  it('should select a network kazam', async () => {
    await homeScreen.selectKazamNetwork();
  });

  it('should apply the filter', async () => {
    await homeScreen.applyFilter();
  });

  it('should slide the EV cards', async () => {
    await homeScreen.slideEvCards();
  });

});