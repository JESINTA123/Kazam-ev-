describe('Scan QR Code', () => {
    it('should scan QR code from homepage', async () => {
        const scanQrButton = await $('//android.widget.TextView[@text="Scan QR"]');
        await scanQrButton.click();
        await driver.pause(10000);
  try {
         const allowCameraButton = await $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_foreground_only_button"]');
            if (await allowCameraButton.isDisplayed()) {
                await allowCameraButton.click();
                console.log("Camera permission granted");
                await driver.pause(2000);
            }
 } catch (err) {
            console.log("Camera permission not shown");
         }
    });
     it('should enter the Device ID and Continue', async () => {   
        const enterDeviceId = await $ ('//android.widget.TextView[@text="Enter Charger ID"]');
        await enterDeviceId.click();
        await driver.pause(2000); 
        const deviceIdInput = await $('//android.widget.EditText[@resource-id="text-input-outlined"]');
        await deviceIdInput.setValue('9yqygi');
        await driver.hideKeyboard();
        await driver.pause(1000);
        const continueBtn = await $('//android.widget.TextView[@text="Continue"]');
        await continueBtn.click();
        await driver.pause(10000);
    });
    it ('should select full charge option', async () => {
        const fullChargeOption = await $('//android.widget.TextView[@text="Full Charge"]');
        await fullChargeOption.click();
        await driver.pause(30000);
    });
    it ('should start charging', async () => {
        const startChargingBtn = await $('//android.widget.TextView[@text="Stop"]');
        await startChargingBtn.waitForDisplayed({ timeout: 10000 });
        await startChargingBtn.click();
        await driver.pause(10000);
        await driver.back();
        await driver.pause(3000);
    });
    // it ('should verify charging history', async () => {
    // });
    
});
