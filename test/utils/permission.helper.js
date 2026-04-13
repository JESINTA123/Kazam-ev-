async function handlePermission(xpath, label, timeout = 3000) {
    try {
        const btn = await $(xpath);
        await btn.waitForDisplayed({ timeout });
        await btn.click();
        console.log(`${label} permission allowed`);
        await driver.pause(1000);
        return true;
    } catch (e) {
        return false;
    }
}

async function handleAllPermissions() {

    // App level permission modal
    await handlePermission(
        '//android.widget.TextView[@text="Allow Permissions"]',
        'Initial Allow Permissions'
    );

    // Loop because order is unpredictable
    for (let i = 0; i < 5; i++) {

        const handled =
            await handlePermission(
                '//android.widget.Button[@text="While using the app"]',
                'Location / Camera'
            ) ||

            await handlePermission(
                '//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_foreground_only_button"]',
                'Location (Foreground)'
            ) ||

            await handlePermission(
                '//android.widget.Button[@text="Only this time"]',
                'One-time permission'
            ) ||

            await handlePermission(
                '//android.widget.Button[@text="Allow"]',
                'Bluetooth / Notifications'
            ) ||

            await handlePermission(
                '//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]',
                'Notifications (System)'
            );

        if (!handled) {
            console.log(' No more permission dialogs');
            break;
        }
    }
}

module.exports = { handleAllPermissions };
