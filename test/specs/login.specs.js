const loginScreen = require('../screenobjects/android/login.screen');
const permissionHelper = require('../utils/permission.helper');
const homeScreen = require('../screenobjects/android/home.screen');

describe('Login Functionality', () => {



it('should enter mobile number', async () => {
  console.log('Entering mobile number');
  await loginScreen.enterPhoneNumber('1234567890');
  await driver.pause(1000);
});

   
it('should enter OTP', async () => {
  await loginScreen.enterOtp('191001');
});


  it('should verify otp', async () => {
  await loginScreen.clickVerifyOtp();
   await permissionHelper.handlePermissions();

});
 
 it('should enter home screen', async () => {
    const isDisplayed = await homeScreen.verifyHomeScreen();
    expect(isDisplayed).toBe(true);
  });
     
});
