class PermissionHelper {

    async handlePermissions() {

          await driver.pause(2000);
        const continueBtn = await $('//android.widget.TextView[@text="Continue"]');
        console.log('Continue visible:', await continueBtn.isDisplayed().catch(() => false));
        if (await continueBtn.waitForDisplayed({ timeout: 3000 }).catch(() => false)) {
            await continueBtn.click();
        }

        const whileUsingApp = await $('//android.widget.Button[contains(@text,"While using")]');
        if (await whileUsingApp.waitForDisplayed({ timeout: 5000 }).catch(() => false)) {
            await whileUsingApp.click();
        }

        const allowBtn = await $('//android.widget.Button[@text="Allow"]');
        if (await allowBtn.waitForDisplayed({ timeout: 5000 }).catch(() => false)) {
            await allowBtn.click();
        }
    }
}

module.exports = new PermissionHelper();
  

