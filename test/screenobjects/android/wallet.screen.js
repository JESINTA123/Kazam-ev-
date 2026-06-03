class WalletScreen {

    get walletBtn() {
        return $('(//android.widget.TextView[@text="Wallet"])[2]');
    }

    get walletPage() {
        return $('//android.widget.TextView[@text="Wallet Balance"]');
    }

    get completeKycBtn() {
        return $('//android.widget.TextView[@text="Complete Minimum KYC"]');
    }

    get kycPage() {
        return $('//android.widget.TextView[@text="Complete Minimum KYC to start using Kazam wallet."]');
    }

    get nameField() {
        return $$('//android.widget.EditText[@resource-id="text-input-outlined"]')[0];
    }

    get emailField() {
        return $$('//android.widget.EditText[@resource-id="text-input-outlined"]')[1];
    }

    get dobField() {
        return $('//android.widget.EditText[@resource-id="text-input-outlined" and @text="DOB (DD/MM/YYYY)"]');
    }

    get dropdown() {
        return $('//android.widget.TextView[@text="Pan Card"]/parent::android.view.ViewGroup');
    }

    get panCardOption() {
        return $('(//android.widget.TextView[@text="Pan Card"])[2]');
    }

    get idNumberField() {
        return $('(//android.widget.EditText[@resource-id="text-input-outlined"])[4]');
    }

    get continueBtn() {
        return $('//android.widget.TextView[@text="Continue"]');
    }

    get okBtn() {
        return $('//android.widget.Button[@resource-id="android:id/button1"]');
    }


    async openWallet() {
        await this.walletBtn.click();
        await this.walletPage.waitForDisplayed({ timeout: 5000 });
        console.log('Wallet page opened');
        await driver.pause(2000);
    }

    async openKycPage() {
        await this.completeKycBtn.click();
        await this.kycPage.waitForDisplayed({ timeout: 5000 });
        console.log('KYC page opened');
        await driver.pause(2000);
    }

    async enterName(name) {
        const field = await this.nameField;
        await field.waitForDisplayed({ timeout: 5000 });
        await field.click();
        await field.clearValue();
        await field.setValue(name);
    }

    async enterEmail(email) {
        const field = await this.emailField;
        await field.waitForDisplayed({ timeout: 5000 });
        await field.click();
        await field.clearValue();
        await field.setValue(email);
    }

    async enterDOB(dob) {
        await this.dobField.click();
        await this.dobField.setValue(dob);
        await driver.hideKeyboard();
        await driver.pause(1000);
    }

    async selectPanCard() {
        await this.dropdown.click();
        await this.panCardOption.click();
        await driver.pause(2000);
    }

    async enterIdNumber(idNumber) {
        await this.idNumberField.click();
        await this.idNumberField.setValue(idNumber);
        await driver.hideKeyboard();
        await driver.pause(1000);
    }

    async clickContinue() {
        await this.continueBtn.click();
        await driver.pause(2000);
    }

    async handleWarningAndGoBack() {
        await this.okBtn.waitForDisplayed({ timeout: 5000 });
        await this.okBtn.click();
        await driver.back();
        await driver.pause(5000);
        await driver.back();
        await driver.pause(1000);
    }


    get profileBtn() {
    return $('//android.widget.TextView[@text="Profile"]');
}

get logoutBtn() {
    return $('//android.widget.TextView[@text="Logout"]');
}

 get phoneInput() {
  return $('//android.widget.EditText[@text="Enter mobile number"]');
}

get verifyOtpBtn() {
    return $('//android.widget.TextView[@text="Verify"]');
  }

async clickProfile() {
    await this.profileBtn.waitForDisplayed({ timeout: 5000 });
    await this.profileBtn.click();
}

async clickLogout() {
    await this.logoutBtn.waitForDisplayed({ timeout: 5000 });
    await this.logoutBtn.click();
}
 async clickVerifyOtp() {
  await this.verifyOtpBtn.waitForDisplayed({ timeout: 5000 });
  await this.verifyOtpBtn.click();
}
 get walletBtn() {
        return $('(//android.widget.TextView[@text="Wallet"])[2]');
    }

    get walletPage() {
        return $('//android.widget.TextView[@text="Wallet Balance"]');
    }
    


}

module.exports = new WalletScreen();