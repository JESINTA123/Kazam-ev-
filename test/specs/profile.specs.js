describe('Profile Functionality', () => {
async function scrollToText(text) {
    await driver.$(`android=new UiScrollable(new UiSelector().scrollable(true))
        .scrollIntoView(new UiSelector().text("${text}"))`);
}

it('should navigate to Profile tab', async () => {
    const profileTab = await $('//android.widget.TextView[@text="Profile"]');
    await profileTab.click();
    await driver.pause(3000);
});
it('should click on user personal details ', async () => {
    const profileCard = await $('android=new UiSelector().descriptionContains("+91")');
    await profileCard.click();
    await driver.pause(3000)
    await driver.back();
});

  it('should open latest charging history', async () => {
  const chargingHistory = await $('//android.widget.TextView[@text="Charging History"]');
  await chargingHistory.click();
  await driver.pause(2000);
  });

  it('should click on first Transaction', async( )=>{ 
  const firstTransaction = await $('(//android.view.ViewGroup[contains(@content-desc,"Rs")])[1]');
  await firstTransaction.click();
  await driver.pause(3000)
  await driver.back();
  await driver.back();
});

it ('should click on Favorites', async() =>{
    await $('//android.widget.TextView[@text="Favourites"]').click();
    await driver.pause(2000);
    await driver.back();


// it('should verify the trip planner', async() =>{
//     await $('//android.widget.TextView[@text="Plan a trip"]').click();
//     await driver.pause(2000);
//     await driver.back();
// })
// it ('should click on my trips', async() =>{
//     await $('//android.widget.TextView[@text="My Trips"]');
//     await driver.pause(2000);
//     await driver.back();
// })


    await scrollToText("Manage");
    const manageSection = await $('//android.widget.TextView[@text="Manage"]');
    await manageSection.waitForDisplayed({ timeout: 5000 });
})

it('should add Vehicles', async () => {
    await $('//android.widget.TextView[@text="Vehicles"]').click();
    await driver.pause(2000);
    await $('//android.view.ViewGroup[@content-desc=""]').click();
    await driver.pause(1000);
    await $('//android.view.ViewGroup[@content-desc="2 Wheeler"]').click();
    await driver.pause(1000);
    await driver.$('android=new UiScrollable(new UiSelector().scrollable(true))'
        + '.scrollIntoView(new UiSelector().text("Ather"))');
    await $('//android.widget.TextView[@text="Ather"]').click();
    await driver.pause(1000);
    await $('//android.widget.textView[@text= "Enter Vehicle Number"]').click();
    await driver.setvalue('KA01AB1234');
    await driver.pause(2000);   

})

it('should click on continue', async () => {
        const continueBtn = await $('//android.widget.TextView[@text="Continue"]');
        await continueBtn.click();
        await driver.pause(2000);
    }); 


it('should change language',async()=>{
    await $('//android.widget.TextView[@text="App Language"]').click();
    await driver.pause(1000);
    await driver.back();
    await $('//android.view.ViewGroup[@content-desc="हिन्दी, 󰄰, Hindi"]').click();
    await driver.back();


    await scrollToText("Actions");
    const actionsSection = await $('//android.widget.TextView[@text="Actions"]');
    await actionsSection.waitForDisplayed({ timeout: 5000 });
})


it('should click on Rate us on play store', async()=>{
    await $('//android.widget.TextView[@text="Rate us on Play Store"]').click();
    await driver.pause(2000);
    await driver.back();
    await driver.pause(1000);

})

it('should click on share App', async()=> {
    await $('//android.widget.TextView[@text="Share app"]').click();
    await driver.pause(2000);
    await driver.back();

    await scrollToText("Legal");
  const legalsection = await $('//android.widget.TextView[@text="Legal"]');
    await legalsection.waitForDisplayed({ timeout: 5000 });
    })

it('should click privacy policy',async()=>{
    await $('//android.widget.TextView[@text="Privacy Policy"]').click();
    await driver.pause(2000);
    await driver.back();
})

it('should click return policy',async()=>{
    await $('//android.widget.TextView[@text="Return policy"]').click();
    await driver.pause(2000);
    await driver.back();
})

it('shouldclick terms of use',async()=>{
    await $('//android.widget.TextView[@text="Terms of use"]').click();
    await driver.pause(2000);
    await driver.back();
    await driver.pause(3000);
})

});