describe ('Trip Planner Functionality', () => {
    it('should click on trip planner', async () => {
        const tripPlannerBtn = await $('//android.widget.TextView[@text="Trip Planner"]');
        await tripPlannerBtn.click();
        const tripPlannerPage = await $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup[2]');
        await tripPlannerPage.waitForDisplayed({ timeout: 2000 });
        await driver.pause(2000);
    });

it('should enter start location', async () => {

    const startLocationBtn = await $('//android.widget.TextView[@text="Start location"]');
    await startLocationBtn.waitForDisplayed({ timeout: 5000 });
    await startLocationBtn.click();

//     // Now actual search input field
//     const searchInput = await $('//android.widget.EditText');
//     await searchInput.waitForDisplayed({ timeout: 5000 });
//     await searchInput.setValue('Bangalore');

//     await driver.pause(2000);
});   

    it ('should select Current Location', async () => {
        const currentLocationOption = await $('//android.widget.TextView[@text="Current location"]');
        await currentLocationOption.click();
        await driver.pause(2000);   
    })


    // it('should select first suggestion for start location', async () => {
    //     const firstSuggestion = await $('//android.widget.TextView[@text="Bangalore"]');
    //     // await firstSuggestion.waitForDisplayed({ timeout: 5000 });
    //     await firstSuggestion.click(); 
    //     await driver.pause(2000);
    // });

   it('should enter end location', async () => {

    const endLocationBtn = await $('//android.widget.TextView[@text="End location"]');
    await endLocationBtn.waitForDisplayed({ timeout: 5000 });
    await endLocationBtn.click();

    const searchInput = await $('//android.widget.EditText');
    await searchInput.waitForDisplayed({ timeout: 5000 });
    await searchInput.setValue('Mumbai');

    await driver.pause(2000);
});


    it('should select first suggestion for end location', async () => {
        const firstSuggestion = await $('//android.widget.TextView[@text="Mumbai"]');
        // await firstSuggestion.waitForDisplayed({ timeout: 5000 });
        await firstSuggestion.click(); 
        await driver.pause(2000);
    });

    it('should click on plan a trip', async () => {
        const planTripBtn = await $('//android.widget.TextView[@text="Plan a trip"]');
        await planTripBtn.click();
        await driver.pause(10000);
        });


});

