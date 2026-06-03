class HomeScreen {

    // get quickFiltersBtn() {
    //     return $('//android.widget.TextView[@text="Available"]');
        
    // }
  
  get searchChargersBtn() {
    return $('//android.widget.TextView[contains(@text,"Search chargers in")]/parent::android.view.ViewGroup');
  }
  async clickSearchChargers() {
    const btn = await this.searchChargersBtn;
    await btn.waitForDisplayed({ timeout: 5000 });
    await btn.click();
    await driver.pause(1000);
  }

  
get searchField() {
  return $('//android.widget.EditText');
}

async enterLocation(location) {

 
  await this.searchField.waitForDisplayed({ timeout: 5000 });
  await this.searchField.click();
  await this.searchField.setValue(location);

  await driver.pause(2000);

 
  const firstSuggestion = await $('android=new UiSelector().text("Koramangala")');

  await firstSuggestion.waitForDisplayed({ timeout: 5000 });
  await firstSuggestion.click();
}

 
  async selectSuggestion(locationText) {
    const suggestion = await $(`//android.widget.TextView[@text="${locationText}"]`);
    await suggestion.waitForDisplayed({ timeout: 5000 });
    await suggestion.click();
    await driver.pause(15000);
  }

  
  get firstEvCard() {
    return $('//android.widget.TextView[@text="Koramangala"]');
  }
  async verifyEvCardDisplayed() {
    const evCard = await this.firstEvCard;
    await evCard.waitForDisplayed({ timeout: 10000 });
    return await evCard.isDisplayed();
  }

  
  get filterBtn() {
    return $('//android.view.ViewGroup[contains(@content-desc,"Search chargers in")]/android.view.ViewGroup[2]/android.view.ViewGroup');
  }
  async clickFilter() {
    const btn = await this.filterBtn;
    await btn.waitForDisplayed({ timeout: 5000 });
    await btn.click();
    await driver.pause(2000);
  }

  get filterOptions() {
    return $$('//android.widget.TextView[contains(@text,"Filter")]');
  }
  async verifyFilterOptionsDisplayed() {
    const options = await this.filterOptions;
    return options.length > 0;
  }

  
  get networkOption() {
    return $('//android.widget.TextView[@text="Network"]');
  }
  async clickNetwork() {
    const network = await this.networkOption;
    await network.waitForDisplayed({ timeout: 5000 });
    await network.click();
    await driver.pause(2000);
  }

  
  get kazamNetwork() {
    return $('//android.widget.TextView[@text="Kazam"]');
  }
  async selectKazamNetwork() {
    const kazam = await this.kazamNetwork;
    await kazam.waitForDisplayed({ timeout: 5000 });
    await kazam.click();
    await driver.pause(2000);
  }

  
  get applyFilterBtn() {
    return $('//android.widget.TextView[@text="Apply"]');
  }
  async applyFilter() {
    const btn = await this.applyFilterBtn;
    await btn.waitForDisplayed({ timeout: 5000 });
    await btn.click();
    await driver.pause(10000);
    await driver.back();
    await driver.pause(3000);
  }

 
  get nearbyChargersLabel() {
    return $('//android.widget.TextView[@text="Nearby Chargers"]');
  }
  async slideEvCards() {
    await this.nearbyChargersLabel;
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
    await driver.pause(3000);
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');
    await driver.pause(5000);
  }

}

module.exports = new HomeScreen();