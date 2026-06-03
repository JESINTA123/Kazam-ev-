const tripPlannerScreen = require('../screenobjects/android/tripplanner.screen');

describe('Trip Planner Functionality', () => {

    it('should click on trip planner', async () => {
        await tripPlannerScreen.openTripPlanner();
    });

    it('should enter start location', async () => {
        await tripPlannerScreen.clickStartLocation();
    });

    it('should select Current Location', async () => {
        await tripPlannerScreen.selectCurrentLocation();
    });

    it('should enter end location', async () => {
        await tripPlannerScreen.enterEndLocation('Mumbai');
    });

    it('should select first suggestion for end location', async () => {
        await tripPlannerScreen.selectEndLocationSuggestion('Mumbai');
    });

    it('should click on plan a trip', async () => {
        await tripPlannerScreen.planTrip();
    });

});