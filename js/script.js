import { getInputValues, showSnackbar, validateInput } from './utils.js';

export const generateSignatureOutlook = () => {
    if (!validateInput()) return;

    const { fullName, jobRole, mobile, email } = getInputValues();
    const signatureHTML = `
        <table cellpadding="0" width="300" style="border-collapse: collapse; font-size: 13.4px;">
            <tr>
                <td style="padding: 0px 12px 0px 0px;">
                    <a href="https://www.euroyacht.hr/en" target="_blank">
                        <img src="images/logo.png" width="100" alt="Euroyacht" style="display: block;">
                    </a>
                </td>
                <td style="border-left: 1px solid #234795; padding: 0px 0px 0px 12px; font-family: Arial, sans-serif;">
                    <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                            <td style="padding: 0px 0px 8px; font-weight: 600; font-size: 17.5px; color: #234795;">
                                ${fullName}
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 0px 0px 8px; font-size: 13.4px; color: #000001;">
                                <span>${jobRole}</span>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 0px; font-size: 13.4px; color: #000001;">
                                <span style="color: #234795; font-weight: 600;">phone:&nbsp;</span>
                                <a href="tel://${mobile}" style="color: #000001; text-decoration: none;">
                                    ${mobile}
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 0px; font-size: 13.4px; color: #000001;">
                                <span style="color: #234795; font-weight: 600;">email:&nbsp;</span>
                                <a href="mailto:${email}" style="color: #000001; text-decoration: none;">
                                    ${email}
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 0px; font-size: 13.4px; color: #000001;">
                                <span style="color: #234795; font-weight: 600;">website: &nbsp;</span>
                                <a href="https://www.euroyacht.hr/en" style="color: #000001; text-decoration: none;">www.euroyacht.hr</a>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 0px 0px;">
                                <a href="https://instagram.com/euroyacht" target="_blank" style="text-decoration: none;">
                                    <img width="22" src="images/instagram-icon.png" alt="Instagram" style="margin-right: 5px;">
                                </a>
                                <a href="https://facebook.com/euroyacht.hr" target="_blank" style="text-decoration: none;">
                                    <img width="22" src="images/facebook-icon.png" alt="Facebook" style="margin-right: 5px;">
                                </a>
                                <a href="https://tiktok.com/@euroyachtcharter" target="_blank" style="text-decoration: none;">
                                    <img width="22" src="images/tiktok-icon.png" alt="TikTok">
                                </a>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    `;

    updateSignaturePreview(signatureHTML);
};

export const generateSignatureOutlookMail = () => {
    if (!validateInput()) return;

    const { fullName, jobRole, mobile, email } = getInputValues();
    const signatureHTML = `
        <table cellpadding="0" width="300" style="border-collapse: collapse; font-size: 10px;">
            <tr>
                <td style="padding: 0px; text-align: left;">
                    <a href="https://www.euroyacht.hr/en" target="_blank">
                        <img src="images/logo.png" width="75" alt="Euroyacht" style="display: block;">
                    </a>
                </td>
            </tr>
            <tr>
                <td style="padding: 12px 0px 6px 0px; text-align: left; font-family: Arial, sans-serif;">
                    <div style="font-weight: 600; font-size: 13px; color: #234795; text-transform: uppercase;">${fullName}</div>
                    <div style="font-size: 10px; color: #000001; font-weight: 600; text-transform: uppercase;">${jobRole}</div>
                </td>
            </tr>
            <tr>
                <td style="padding: 6px 0px; font-size: 10px; color: #000001; text-align: left;">
                    <div style="border-top: 1px solid #234795; width: 50px;"></div>
                </td>
            </tr>
            <tr>
                <td style="padding: 6px 0px 2px 0px; font-size: 10px; color: #000001; text-align: left;">
                    <span style="color: #234795; font-weight: 600;">phone:&nbsp;</span>
                    <a href="tel://${mobile}" style="color: #000001; text-decoration: none;">
                        ${mobile}
                    </a>
                </td>
            </tr>
            <tr>
                <td style="padding: 2px 0px; font-size: 10px; color: #000001; text-align: left;">
                    <span style="color: #234795; font-weight: 600;">email:&nbsp;</span>
                    <a href="mailto:${email}" style="color: #000001; text-decoration: none;">
                        ${email}
                    </a>
                </td>
            </tr>
            <tr>
                <td style="padding: 2px 0px; font-size: 10px; color: #000001; text-align: left;">
                    <span style="color: #234795; font-weight: 600;">website: &nbsp;</span>
                    <a href="https://www.euroyacht.hr/en" style="color: #000001; text-decoration: none;">www.euroyacht.hr</a>
                </td>
            </tr>
            <tr>
                <td style="padding: 8px 0px 0px; font-size: 10px; color: #000001; text-align: left;">
                    <a href="https://instagram.com/euroyacht" target="_blank" style="text-decoration: none;">
                        <img width="22" src="images/instagram-icon.png" alt="Instagram" style="margin-right: 5px;">
                    </a>
                    <a href="https://facebook.com/euroyacht.hr" target="_blank" style="text-decoration: none;">
                        <img width="22" src="images/facebook-icon.png" alt="Facebook" style="margin-right: 5px;">
                    </a>
                    <a href="https://tiktok.com/@euroyachtcharter" target="_blank" style="text-decoration: none;">
                        <img width="22" src="images/tiktok-icon.png" alt="TikTok">
                    </a>
                </td>
            </tr>
        </table>
    `;

    updateSignaturePreview(signatureHTML);
};

const updateSignaturePreview = (html) => {
    const signaturePreview = document.getElementById('signaturePreview');
    signaturePreview.innerHTML = html;
    document.getElementById('copyButton').style.display = 'block';
};

export const copySignature = () => {
    const signaturePreview = document.getElementById('signaturePreview');
    const range = document.createRange();
    range.selectNodeContents(signaturePreview);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    try {
        document.execCommand('copy');
        selection.removeAllRanges();
        showSnackbar('Signature copied successfully!');
    } catch (err) {
        console.error('Failed to copy signature: ', err);
        showSnackbar('Failed to copy signature. Please try again.');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('generateOutlook').addEventListener('click', generateSignatureOutlook);
    document.getElementById('generateOutlookMail').addEventListener('click', generateSignatureOutlookMail);
    document.getElementById('copyButton').addEventListener('click', copySignature);
});
