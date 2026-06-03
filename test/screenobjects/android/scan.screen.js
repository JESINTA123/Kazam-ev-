class ScanQRScreen {

    get scanQrButton() {
        return $('//android.widget.TextView[@text="Scan QR"]'); 
    }

    get allowCameraButton() {
        return $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_foreground_only_button"]');
    }

    get enterChargerIdText() {
        return $('//android.widget.TextView[@text="Enter Charger ID"]');
    }

    get deviceIdInput() {
        return $('//android.widget.EditText[@resource-id="text-input-outlined"]');
    }

    get continueButton() {
        return $('//android.widget.TextView[@text="Continue"]');
    }

    get fullChargeOption() {
        return $('//android.widget.TextView[@text="Full Charge"]');
    }

    get stopButton() {
        return $('//android.widget.TextView[@text="Stop"]');
    }

    async tapScanQR() {
        await this.scanQrButton.click(); 
        await driver.pause(10000);
    }

    async grantCameraPermissionIfPrompted() {
        try {
            const btn = this.allowCameraButton; 
            if (await btn.isDisplayed()) {
                await btn.click();
                console.log('Camera permission granted');
                await driver.pause(2000);
            }
        } catch (err) {
            console.log('Camera permission not shown');
        }
    }

    async enterDeviceId(deviceId) {
        await this.enterChargerIdText.click(); 
        await driver.pause(2000);

        const input = this.deviceIdInput; 
        await input.setValue(deviceId);
        await driver.hideKeyboard();
        await driver.pause(1000);
    }

    async tapContinue() {
        await this.continueButton.click(); 
        await driver.pause(10000);
    }

    async selectFullCharge() {
        await this.fullChargeOption.click();
        await driver.pause(30000);
    }

    async tapStopAndGoBack() {
        const stop = this.stopButton; 
        await stop.waitForDisplayed({ timeout: 10000 });
        await stop.click();
        await driver.pause(10000);
        await driver.back();
        await driver.pause(3000);
    }
}

module.exports = new ScanQRScreen();