class ScanScreen {

  // Homepage Scan QR button
  get scanQrBtn() {
    return $('//android.widget.TextView[@text="Scan QR"]');
  }

  // Camera permission
  get allowCameraBtn() {
    return $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_foreground_only_button"]');
  }

  // Enter Charger ID
  get enterChargerIdBtn() {
    return $('//android.widget.TextView[@text="Enter Charger ID"]');
  }

  // Charger ID input
  get chargerIdInput() {
    return $('//android.widget.EditText[@resource-id="text-input-outlined"]');
  }

  // Continue button
  get continueBtn() {
    return $('//android.widget.TextView[@text="Continue"]');
  }

  // Full charge option
  get fullChargeOption() {
    return $('//android.widget.TextView[@text="Full Charge"]');
  }

  // Start / Stop charging button
  get startStopChargingBtn() {
    return $('//android.widget.TextView[@text="Stop"]');
  }

  async clickScanQr() {
    await this.scanQrBtn.click();
  }

  async allowCameraPermissionIfVisible() {
    try {
      if (await this.allowCameraBtn.isDisplayed()) {
        await this.allowCameraBtn.click();
        console.log('Camera permission granted');
        await driver.pause(2000);
      }
    } catch (err) {
      console.log('Camera permission not shown');
    }
  }

  async enterChargerId(deviceId) {
    await this.enterChargerIdBtn.click();
    await driver.pause(2000);
    await this.chargerIdInput.setValue(deviceId);
    await driver.hideKeyboard();
  }

  async clickContinue() {
    await this.continueBtn.click();
  }

  async selectFullCharge() {
    await this.fullChargeOption.click();
  }

  async startCharging() {
    await this.startStopChargingBtn.waitForDisplayed({ timeout: 10000 });
    await this.startStopChargingBtn.click();
  }

  async completeScanAndStartCharge(deviceId) {
    await this.clickScanQr();
    await driver.pause(10000);
    await this.allowCameraPermissionIfVisible();
    await this.enterChargerId(deviceId);
    await driver.pause(1000);
    await this.clickContinue();
    await driver.pause(10000);
    await this.selectFullCharge();
    await driver.pause(30000);
    await this.startCharging();
  }
}

module.exports = new ScanScreen();
