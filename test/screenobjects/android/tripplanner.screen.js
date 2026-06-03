class TripPlannerScreen {

    get tripPlannerBtn() {
        return $('//android.widget.TextView[@text="Trip Planner"]');
    }

    get tripPlannerPage() {
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup[2]');
    }

    get startLocationBtn() {
        return $('//android.widget.TextView[@text="Start location"]');
    }

    get currentLocationOption() {
        return $('//android.widget.TextView[@text="Current location"]');
    }

    get endLocationBtn() {
        return $('//android.widget.TextView[@text="End location"]');
    }

    get searchInput() {
        return $('//android.widget.EditText');
    }

    get mumbaiSuggestion() {
        return $('//android.widget.TextView[@text="Mumbai"]');
    }

    get planTripBtn() {
        return $('//android.widget.TextView[@text="Plan a trip"]');
    }


    async openTripPlanner() {
        await this.tripPlannerBtn.click();
        await this.tripPlannerPage.waitForDisplayed({ timeout: 2000 });
        await driver.pause(2000);
    }

    async clickStartLocation() {
        await this.startLocationBtn.waitForDisplayed({ timeout: 5000 });
        await this.startLocationBtn.click();
    }

    async selectCurrentLocation() {
        await this.currentLocationOption.click();
        await driver.pause(2000);
    }

    async enterEndLocation(location) {
        await this.endLocationBtn.waitForDisplayed({ timeout: 5000 });
        await this.endLocationBtn.click();
        await this.searchInput.waitForDisplayed({ timeout: 5000 });
        await this.searchInput.setValue(location);
        await driver.pause(2000);
    }

    async selectEndLocationSuggestion(location) {
        const suggestion = await $(`//android.widget.TextView[@text="${location}"]`);
        await suggestion.click();
        await driver.pause(2000);
    }

    async planTrip() {
        await this.planTripBtn.click();
        await driver.pause(10000);
    }
}

module.exports = new TripPlannerScreen();