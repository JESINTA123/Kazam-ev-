class LoginScreen {

  // Cancel popup
  get cancelBtn() {
    return $('//android.widget.ImageView[@content-desc="Cancel"]');
  }

  // Phone input
  get phoneInput() {
    return $('//android.widget.EditText[@text="Enter mobile number"]');
  }

  // Verify OTP button
  get verifyOtpBtn() {
    return $('//android.widget.TextView[@text="Verify"]');
  }

  // Home tab (post login validation)
  get homeTab() {
    return $('//android.widget.TextView[@text="Home"]');
  }

  async cancelPopupIfVisible() {
    if (await this.cancelBtn.waitForDisplayed({ timeout: 5000 }).catch(() => false)) {
      await this.cancelBtn.click();
    }
  }

  async enterPhoneNumber(number) {
    await this.phoneInput.setValue(number);
  }

  async enterOtp(otp) {
    for (let i = 0; i < otp.length; i++) {
      const otpBox = await $(`//android.view.ViewGroup[@resource-id="otp_input_${i}"]`);
      await otpBox.click();
      await driver.keys(otp[i]);
      await driver.pause(300);
    }
  }

  async verifyOtp() {
    await this.verifyOtpBtn.click();
  }

  async login(phone, otp) {
    await this.cancelPopupIfVisible();
    await this.enterPhoneNumber(phone);
    await driver.pause(3000);
    await this.enterOtp(otp);
    await this.verifyOtp();
  }

  async verifyHomePage() {
    await this.homeTab.waitForDisplayed({ timeout: 10000 });
    return await this.homeTab.isDisplayed();
  }
}

module.exports = new LoginScreen();
