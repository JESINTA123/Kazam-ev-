class LoginScreen {

 get phoneInput() {
  return $('//android.widget.EditText[@text="Enter mobile number"]');
}

async enterPhoneNumber(number) {
  await this.phoneInput.setValue(number);
}
get otpBoxes() {
  return $$('//android.view.ViewGroup[@resource-id="otp_input_0"]//android.widget.EditText');
}

get firstOtpBox() {
  return $('//android.view.ViewGroup[@resource-id="otp_input_0"]');
}

async enterOtp(otp) {
  await this.firstOtpBox.waitForDisplayed({ timeout: 5000 });
  await this.firstOtpBox.click(); 
  await driver.keys(otp);
}


  // Verify OTP button
  get verifyOtpBtn() {
    return $('//android.widget.TextView[@text="Verify"]');
  }

  async clickVerifyOtp() {
  console.log('Clicking Verify Button');
  await this.verifyOtpBtn.waitForDisplayed({ timeout: 5000 });
  await this.verifyOtpBtn.click();
}

get homeScreenTitle() {
    return $('android.widget.ImageView[@content-desc="Home"] ');
  }

  async verifyHomeScreen() {
    const title = await this.homeScreenTitle;
    await title.waitForDisplayed({ timeout: 5000 });
    const isDisplayed = await title.isDisplayed();
    console.log('Home screen displayed:', isDisplayed);
    return isDisplayed;
  }

}


module.exports = new LoginScreen();
