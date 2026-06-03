const scanQRScreen = require('../screenobjects/android/scan.screen');

describe('Scan QR Code', () => {

    it('should scan QR code from homepage', async () => {
        await scanQRScreen.tapScanQR();
        await scanQRScreen.grantCameraPermissionIfPrompted();
    });

    it('should enter the Device ID and Continue', async () => {
        await scanQRScreen.enterDeviceId('tes700');
        await scanQRScreen.tapContinue();
    });

    it('should select full charge option', async () => {
        await scanQRScreen.selectFullCharge();
    });

    it('should start charging', async () => {
        await scanQRScreen.tapStopAndGoBack();
    });
});