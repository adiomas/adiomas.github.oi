import { JSDOM } from 'jsdom';
import * as script from '../js/script.js';
import { getInputValues, showError, showSnackbar, validateInput } from '../js/utils.js';

const dom = new JSDOM(`
<!DOCTYPE html>
<html>
<body>
    <input id="fullName" value="John Doe">
    <input id="jobRole" value="Manager">
    <input id="mobile" value="+1234567890">
    <input id="email" value="john@example.com">
    <div id="error-message"></div>
    <div id="snackbar"></div>
    <div id="signaturePreview"></div>
    <button id="generateOutlook">Generate (OUTLOOK)</button>
    <button id="generateOutlookMail">Generate (OUTLOOK + MAIL - iOS)</button>
    <button id="copyButton" style="display: none;">Copy Signature</button>
</body>
</html>
`);

global.document = dom.window.document;
global.window = dom.window;

// Mock functions
document.execCommand = jest.fn();
window.getSelection = jest.fn(() => ({
    removeAllRanges: jest.fn(),
    addRange: jest.fn()
}));

describe('Utility Functions', () => {
    test('validateInput should return true when all fields are filled', () => {
        expect(validateInput()).toBe(true);
    });

    test('validateInput should return false when a field is empty', () => {
        document.getElementById('fullName').value = '';
        expect(validateInput()).toBe(false);
        document.getElementById('fullName').value = 'John Doe'; // Reset
    });

    test('showError should display an error message', () => {
        showError('Test error message');
        expect(document.getElementById('error-message').textContent).toBe('Test error message');
    });

    test('showSnackbar should add show class to snackbar', () => {
        showSnackbar('Test message');
        expect(document.getElementById('snackbar').className).toBe('show');
    });

    test('getInputValues should return correct values', () => {
        const values = getInputValues();
        expect(values).toEqual({
            fullName: 'John Doe',
            jobRole: 'Manager',
            mobile: '+1234567890',
            email: 'john@example.com'
        });
    });
});

describe('Signature Generation', () => {
    beforeEach(() => {
        document.getElementById('signaturePreview').innerHTML = '';
    });

    test('generateSignatureOutlook should generate Outlook signature', () => {
        script.generateSignatureOutlook();
        const preview = document.getElementById('signaturePreview');
        expect(preview.innerHTML).toContain('table');
        expect(preview.innerHTML).toContain('John Doe');
        expect(preview.innerHTML).toContain('Manager');
        expect(preview.innerHTML).toContain('+1234567890');
        expect(preview.innerHTML).toContain('john@example.com');
    });

    test('generateSignatureOutlookMail should generate Outlook + Mail iOS signature', () => {
        script.generateSignatureOutlookMail();
        const preview = document.getElementById('signaturePreview');
        expect(preview.innerHTML).toContain('table');
        expect(preview.innerHTML).toContain('John Doe');
        expect(preview.innerHTML).toContain('Manager');
        expect(preview.innerHTML).toContain('+1234567890');
        expect(preview.innerHTML).toContain('john@example.com');
    });
});

describe('Copy Functionality', () => {
    test('copySignature should copy the signature and show a snackbar', () => {
        document.getElementById('signaturePreview').innerHTML = '<div>Test Signature</div>';
        script.copySignature();
        expect(document.execCommand).toHaveBeenCalledWith('copy');
        expect(document.getElementById('snackbar').textContent).toBe('Signature copied successfully!');
    });
});

describe('Event Listeners', () => {
    test('should set up event listeners on DOMContentLoaded', () => {
        const addEventListenerSpy = jest.spyOn(document, 'addEventListener');
        const generateOutlookSpy = jest.spyOn(script, 'generateSignatureOutlook');
        const generateOutlookMailSpy = jest.spyOn(script, 'generateSignatureOutlookMail');
        const copySignatureSpy = jest.spyOn(script, 'copySignature');

        // Manually trigger the DOMContentLoaded event
        document.dispatchEvent(new Event('DOMContentLoaded'));

        expect(addEventListenerSpy).toHaveBeenCalledWith('DOMContentLoaded', expect.any(Function));

        // Simulate button clicks
        document.getElementById('generateOutlook').click();
        expect(generateOutlookSpy).toHaveBeenCalled();

        document.getElementById('generateOutlookMail').click();
        expect(generateOutlookMailSpy).toHaveBeenCalled();

        document.getElementById('copyButton').click();
        expect(copySignatureSpy).toHaveBeenCalled();

        // Clean up
        addEventListenerSpy.mockRestore();
        generateOutlookSpy.mockRestore();
        generateOutlookMailSpy.mockRestore();
        copySignatureSpy.mockRestore();
    });
});
