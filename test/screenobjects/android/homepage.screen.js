class LocationSearchScreen {


  // get searchChargersBtn() {
  //   return $('//android.widget.TextView[@text=""]');
  // }

  // // Search input field
  get searchInput() {
    return $('//android.view.ViewGroup[contains(@content-desc,"Search chargers in")]');
  }

  // First location suggestion
  get firstSuggestion() {
    return $('//android.widget.TextView[@text="Koramangala"]');
  }

  // First EV Card
  // get firstEvCard() {
  //   return $('(//android.view.ViewGroup[@content-desc="EV Card"])[1]');
  // }

  async clickSearchChargers() {
    await this.searchChargersBtn.click();
  }

  async enterLocation(location) {
    await this.searchInput.setValue(location);
  }

  async selectFirstSuggestion() {
    await this.firstSuggestion.waitForDisplayed({ timeout: 15000 });
    await this.firstSuggestion.click();
  }

  async clickFirstEvCard() {
    await this.firstEvCard.waitForDisplayed({ timeout: 25000 });
    await this.firstEvCard.click();
  }

  async searchAndSelectEv(location) {
    await this.clickSearchChargers();
    await driver.pause(1000);
    await this.enterLocation(location);
    await this.selectFirstSuggestion();
    await this.clickFirstEvCard();    
  }
}





module.exports = new LocationSearchScreen();
