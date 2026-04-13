const { handleAllPermissions } = require('../utils/permission.helper');

describe('Login Functionality', () => {

  it('should cancel the popup if shown', async () => {
    const cancelBtn = await $('//android.widget.ImageView[@content-desc="Cancel"]');
    if (await cancelBtn.waitForDisplayed({ timeout: 2000 }).catch(() => false)) {
      await cancelBtn.click(); 
    }
  });

    it('should enter mobile number', async () => {
    const phoneInput = await $('//android.widget.EditText[@text="Enter mobile number"]');
    await phoneInput.setValue('1234567890');
    await driver.pause(1000);
    })
   
 it('should enter OTP ', async () => {
  const otp = '191001';
  const firstOtpBox = await $('//android.view.ViewGroup[@resource-id="otp_input_0"]');
  await firstOtpBox.waitForDisplayed({ timeout: 1000 });
  await firstOtpBox.click();
  await driver.keys(otp);
});


    it ('should verify otp', async () => {
      const otpVerifyBtn = await $('//android.widget.TextView[@text="Verify"]');
    await otpVerifyBtn.click();
    await  driver.pause(1000);
    });
    
   
//  it('should allow all permissions', async () => {
//     await handleAllPermissions();
//   });

// it('should verify home page is displayed after login', async () => {
//   const homeTab = await $('//android.view.View[@content-desc="Home"]/android.view.ViewGroup/android.view.ViewGroup');
//   await homeTab.waitForDisplayed({ timeout: 20000 });

//   const walletBalance = await $('//android.widget.TextView[@text="Wallet Balance"]');
//   await walletBalance.waitForDisplayed({ timeout: 20000 });

//   console.log('Login successful, Home page loaded');
// });

});
