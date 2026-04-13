const locationSearch = require('../screenobjects/android/homepage.screen');

describe('Location Search', () => {

  it('should click on search chargers', async () => {
   const searchChargersBtn = await $('//android.widget.TextView[contains(@text,"Search chargers in")]/parent::android.view.ViewGroup');
   await searchChargersBtn.click();
    await driver.pause(1000);
  });


  it('should enter location', async () => {
   const searchInput = await $('//android.widget.EditText[@text=" "]');
    await searchInput.setValue('Koramangala');
    await driver.pause(2000);
  });

  it('should select first suggestion', async () => {
    const firstSuggestion = await $('//android.widget.TextView[@text="Koramangala"]');
    await firstSuggestion.waitForDisplayed({ timeout: 2000 });
    await firstSuggestion.click(); 
    await driver.pause(15000);
  });

  // it('should click first EV card', async () => {
  //   await locationSearch.clickFirstEvCard();
  // });

  it('should verify EV card is displayed', async () => {
    const evCard = await locationSearch.firstEvCard;
    expect(evCard).toBeDisplayed();
  });



  it('should click on filter', async () => {
    const filterBtn = await $('//android.view.ViewGroup[contains(@content-desc,"Search chargers in")]/android.view.ViewGroup[2]/android.view.ViewGroup');
    await filterBtn.click();
    await driver.pause(2000);
  });
  it('should verify filter options are displayed', async () => {
    const filterOptions = await $$('//android.widget.TextView[contains(@text,"Filter")]');
    expect(filterOptions.length).toBeGreaterThan(0);
  });
  it('should click on network', async () => {
    const networkOption = await $('//android.widget.TextView[@text="Network"]');
    await networkOption.click();
    await driver.pause(2000);
  });
  it('should select a network kazam', async () => {
    const kazamNetwork = await $('//android.widget.TextView[@text="Kazam"]');
    await kazamNetwork.click();
    await driver.pause(2000);
  });
  it('should apply the filter', async () => {
    const applyFilterBtn = await $('//android.widget.TextView[@text="Apply"]');
    await applyFilterBtn.click();
    await driver.pause(10000);
    await driver.back();
    await driver.pause(3000);
  });

  it('should slide the Ev cardrs',async () => {
    const evCards = await $('//android.widget.TextView[@text="Nearby Chargers"]');
    // await evCards.waitForDisplayed({ timeout: 2000 });
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
    await driver.pause(3000);
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');
    await driver.pause(5000);

  });
  });