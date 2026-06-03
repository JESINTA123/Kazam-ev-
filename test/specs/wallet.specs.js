const walletScreen = require('../screenobjects/android/wallet.screen');
const LoginScreen = require('../screenobjects/android/login.screen');

describe('Wallet Functionality', () => {

    it('should click on wallet', async () => {
        await walletScreen.openWallet();
    });

    it('should click complete KYC', async () => {
        await walletScreen.openKycPage();
    });

    it('should enter name', async () => {
        await walletScreen.enterName('Jesinta');
    });

    it('should enter email', async () => {
        await walletScreen.enterEmail('jesinta@kazam.in');
    });

    it('should click on DOB', async () => {
        await walletScreen.enterDOB('27122000');
    });

    it('should select drop down option', async () => {
        await walletScreen.selectPanCard();
    });

    it('should enter identity number', async () => {
        await walletScreen.enterIdNumber('ABCDE1234F');
    });

    it('should click on continue', async () => {
        await walletScreen.clickContinue();
    });

    it('should click ok on warning message', async () => {
        await walletScreen.handleWarningAndGoBack();
    });

    it('should go back to home screen', async () => {
        await driver.back();
        await driver.pause(2000);
    });

    it('should click on profile', async () => {

    // Profile click
    await walletScreen.clickProfile();

    // Scroll till Logout button
    await $('android=new UiScrollable(new UiSelector().scrollable(true))'
    + '.scrollIntoView(new UiSelector().text("Logout"))');

    await driver.pause(2000);

    // Logout click
    await walletScreen.clickLogout();

    await driver.pause(3000);
    });

     it('should login again', async () => {
    await LoginScreen.enterPhoneNumber('9741618067');

    // Continue button
    await LoginScreen.clickContinue();

    // Manual OTP
    console.log('Enter OTP manually');

    await driver.pause(20000);
    
     await loginScreen.clickVerifyOtp(); 
     await driver.pause(5000);
     
   });

}); 
