describe('wallet Functionality', () => {
    it('should click on wallet', async () => {
        const walletBtn = await $('(//android.widget.TextView[@text="Wallet"])[2]');
        await walletBtn.click();
        const walletPage = await $('//android.widget.TextView[@text="Wallet Balance"]');
        console.log("Wallet page opened");
        await driver.pause(2000);
    });
     
    it('should click complete KYC', async () => {
        const completeKycBtn = await $('//android.widget.TextView[@text="Complete Minimum KYC"]');
        await completeKycBtn.click();
        const kycPage = await $('//android.widget.TextView[@text="Complete Minimum KYC to start using Kazam wallet."]');
        console.log("KYC page opened");
        await driver.pause(2000);
    });

    it('should enter name', async () => {
        const nameField = await $$('//android.widget.EditText[@resource-id="text-input-outlined"]')[0];
        await nameField.waitForDisplayed({ timeout: 5000 });
        await nameField.click();
        await nameField.clearValue();
        await nameField.setValue('Jesinta');

    });

    it('should enter email', async () => {
        const emailField = await $$('//android.widget.EditText[@resource-id="text-input-outlined"]')[1];
        await emailField.waitForDisplayed({ timeout: 5000 });
        await emailField.click();
        await emailField.clearValue();
        await emailField.setValue('jesinta@kazam.in');
    });

    it('should click on DOB', async () => {
        const dobField = await $('//android.widget.EditText[@resource-id="text-input-outlined" and @text="DOB (DD/MM/YYYY)"]');
        //await dobField.waitForDisplayed({ timeout: 5000 });
        await dobField.click();
        await dobField.setValue('27122000');
        await driver.hideKeyboard();
        await driver.pause(1000);
    });
 
    it('should select drop down option', async () => {
        const dropdown = await $('//android.widget.TextView[@text="Pan Card"]/parent::android.view.ViewGroup');
        await dropdown.click();
        const option = await $('(//android.widget.TextView[@text="Pan Card"])[2]');
        //await option.waitForDisplayed({ timeout: 3000 });
        await option.click();
        await driver.pause(2000);
    });
      
    it('should Enter identity number', async () => {
        const idNumberField = await $('(//android.widget.EditText[@resource-id="text-input-outlined"])[4]');
        await idNumberField.click();
        await idNumberField.setValue('ABCDE1234F');
        await driver.hideKeyboard();
        await driver.pause(1000);
    });

    it('should click on continue', async () => {
        const continueBtn = await $('//android.widget.TextView[@text="Continue"]');
        await continueBtn.click();
        await driver.pause(2000);
    }); 

     it('should click ok on warning message',async ()=>{
        const okBtn = await $('//android.widget.Button[@resource-id="android:id/button1"]');
        await okBtn.waitForDisplayed({ timeout: 5000 });
        await okBtn.click();
        await driver.back();
        await driver.pause (5000);
     })


});

