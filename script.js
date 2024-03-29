function generateSignatureOutlook() {
  const fullName = document.getElementById('fullName').value;
  const jobRole = document.getElementById('jobRole').value;
  const mobile = document.getElementById('mobile').value;
  const email = document.getElementById('email').value;
  const website = "https://www.euroyacht.hr/en"; // Predefined website URL
  const imageURL = "https://i.ibb.co/gVYGPL3/logo.png";
  const emailLogo = "https://i.ibb.co/sC9nLBw/email.png";
  const phoneLogo = "https://i.ibb.co/S5qCxTb/phone.png";
  const webLogo = "https://i.ibb.co/DL794Zb/website.png";
  const instagramLogo = "https://i.ibb.co/4mmBC8r/instagram.png";
  const tiktokLogo = "https://i.ibb.co/sydZKnm/tiktok.png";
  const facebookLogo = "https://i.ibb.co/4NDKPwt/facebook.png";

  // Validate input fields
  if (!fullName || !jobRole || !mobile || !email) {
    alert("All fields need to be filled.");
    return;
  }


  const signaturePreview = document.getElementById('signaturePreview');
  signaturePreview.innerHTML = `<div>
    <table cellpadding="0" width="300" style="border-collapse: collapse; font-size: 13.4px;">
        <tbody>
            <tr>
                <td style="margin: 0.1px; padding: 0px;">
                    <table cellpadding="0" style="border-collapse: collapse; text-align: left;">
                        <tbody>
                            <tr>
                                <td valign="top" style="margin: 0.1px; padding: 0px 12px 0px 0px;">
                                    <a href="${website}" target="_blank">
                                        <img src="${imageURL}" width="100" alt="Euroyacht" style="display: block; min-width: 100px;">
                                    </a>
                                </td>
                                <td valign="top" style="border-left-width: 1px; border-left-style: solid; border-left-color: rgb(35, 71, 149); margin: 0.1px; padding: 0px 0px 0px 12px; font-family: Arial, Helvetica, sans-serif;">
                                    <table cellpadding="0" style="border-collapse: collapse;">
                                        <tbody>
                                            <tr>
                                                <td style="margin: 0.1px; padding: 0px 0px 8px; font-weight: 600; font-size: 17.5px; color: rgb(35, 71, 149);">
                                                    ${fullName}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="margin: 0.1px; padding: 0px 0px 8px; font-size: 13.4px; color: rgb(0, 0, 1);">
                                                    <span>${jobRole}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="margin: 0.1px; padding: 0px; font-size: 13.4px; color: rgb(0, 0, 1);">
                                                    <span style="color: rgb(35, 71, 149); font-weight: 600;">phone:&nbsp;</span>
                                                    <a href="tel://${mobile}" target="_blank" style="color: rgb(0, 0, 1); text-decoration: none;">
                                                        ${mobile}
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="margin: 0.1px; padding: 0px; font-size: 13.4px; color: rgb(0, 0, 1);">
                                                    <span style="color: rgb(35, 71, 149); font-weight: 600;">email:&nbsp;</span>
                                                    <a href="mailto:${email}" target="_blank" style="color: rgb(0, 0, 1); text-decoration: none;">
                                                        ${email}
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="margin: 0.1px; padding: 0px; font-size: 13.4px; color: rgb(0, 0, 1);">
                                                    <span style="color: rgb(35, 71, 149); font-weight: 600;">website: &nbsp;</span>
                                                    <a href="${website}" target="_blank" style="color: rgb(0, 0, 1); text-decoration: none;">www.euroyacht.hr
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="margin: 0.1px; padding: 12px 0px 0px; font-size: 13.4px; color: rgb(0, 0, 1);">
                                                    <table cellpadding="0" style="border-collapse: collapse;">
                                                        <tbody>
                                                            <tr>
                                                                <td style="margin: 0.1px; padding: 0px 5px 0px 0px;">
                                                                    <a href="https://instagram.com/euroyacht" target="_blank">
                                                                        <img width="22" src="https://img.mysignature.io/s/1/f/a/1faf0ad2-8164-56d0-9b65-6d62a56cd22c.png?uid=654367" alt="Instagram" style="display: block;">
                                                                    </a>
                                                                </td>
                                                                <td style="margin: 0.1px; padding: 0px 5px 0px 0px;">
                                                                    <a href="https://facebook.com/euroyacht.hr" target="_blank">
                                                                        <img width="22" src="https://img.mysignature.io/s/d/9/a/d9a505f7-c884-5a57-bb57-0542959d3c27.png?uid=654367" alt="Facebook" style="display: block;">
                                                                    </a>
                                                                </td>
                                                                <td style="margin: 0.1px; padding: 0px 5px 0px 0px;">
                                                                    <a href="https://tiktok.com/@euroyachtcharter" target="_blank">
                                                                        <img width="22" src="https://img.mysignature.io/s/6/d/e/6de544ab-6792-54e1-8678-ea1ecdc699b6.png?uid=654367" alt="TikTok" style="display: block;">
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
    `;

  // Show copy button
  document.getElementById('copyButton').style.display = 'block';
}

function generateSignatureOutlookMail() {
  const fullName = document.getElementById('fullName').value;
  const jobRole = document.getElementById('jobRole').value;
  const mobile = document.getElementById('mobile').value;
  const email = document.getElementById('email').value;
  const website = "https://www.euroyacht.hr/en"; // Predefined website URL
  const imageURL = "https://i.ibb.co/gVYGPL3/logo.png";
  const emailLogo = "https://i.ibb.co/sC9nLBw/email.png";
  const phoneLogo = "https://i.ibb.co/S5qCxTb/phone.png";
  const webLogo = "https://i.ibb.co/DL794Zb/website.png";
  const instagramLogo = "https://i.ibb.co/4mmBC8r/instagram.png";
  const tiktokLogo = "https://i.ibb.co/sydZKnm/tiktok.png";
  const facebookLogo = "https://i.ibb.co/4NDKPwt/facebook.png";

  // Validate input fields
  if (!fullName || !jobRole || !mobile || !email) {
    alert("All fields need to be filled.");
    return;
  }

  const signaturePreview = document.getElementById('signaturePreview');
  signaturePreview.innerHTML = `
  <div class="email-signature" style="text-align: left;">
      <table cellpadding="0" width="300" style="border-collapse: collapse; font-size: 10px;">
          <tbody>
              <tr>
                  <td style="margin: 0.1px; padding: 0px; text-align: left;">
                      <a href="${website}" target="_blank">
                          <img src="${imageURL}" width="75" alt="Euroyacht" style="display: block; min-width: 75px;">
                      </a>
                  </td>
              </tr>
              <tr>
                  <td style="margin: 0.1px; padding: 12px 0px 6px 0px; text-align: left; font-family: Arial, Helvetica, sans-serif;">
                      <div style="font-weight: 600; font-size: 13px; color: rgb(35, 71, 149); text-transform: uppercase;">${fullName}</div>
                      <div style="font-size: 10px; color: rgb(0, 0, 1); font-weight: 600; text-transform: uppercase;">${jobRole}</div>
                  </td>
              </tr>
              <tr>
                  <td style="margin: 0.1px; padding: 6px 0px; font-size: 10px; color: rgb(0, 0, 1); text-align: left;">
                      <div style="border-top-width: 1px; border-top-style: solid; border-top-color: rgb(35, 71, 149); width: 50px;"></div>
                  </td>
              </tr>
              <tr>
                  <td style="margin: 0.1px; padding: 6px 0px 2px 0px; font-size: 10px; color: rgb(0, 0, 1); text-align: left;">
                      <span style="color: rgb(35, 71, 149); font-weight: 600;">phone:&nbsp;</span>
                      <a href="tel://${mobile}" target="_blank" style="color: rgb(0, 0, 1); text-decoration: none;">
                          ${mobile}
                      </a>
                  </td>
              </tr>
              <tr>
                  <td style="margin: 0.1px; padding: 2px 0px; font-size: 10px; color: rgb(0, 0, 1); text-align: left;">
                      <span style="color: rgb(35, 71, 149); font-weight: 600;">email:&nbsp;</span>
                      <a href="mailto:${email}" target="_blank" style="color: rgb(0, 0, 1); text-decoration: none;">
                          ${email}
                      </a>
                  </td>
              </tr>
              <tr>
                  <td style="margin: 0.1px; padding: 2px 0px; font-size: 10px; color: rgb(0, 0, 1); text-align: left;">
                      <span style="color: rgb(35, 71, 149); font-weight: 600;">website: &nbsp;</span>
                      <a href="${website}" target="_blank" style="color: rgb(0, 0, 1); text-decoration: none;">www.euroyacht.hr
                      </a>
                  </td>
              </tr>
              <tr>
                  <td style="margin: 0.1px; padding: 8px 0px 0px; font-size: 10px; color: rgb(0, 0, 1); text-align: left;">
                      <a href="https://instagram.com/euroyacht" target="_blank">
                          <img width="22" src="https://img.mysignature.io/s/1/f/a/1faf0ad2-8164-56d0-9b65-6d62a56cd22c.png?uid=654367" alt="Instagram" style="margin-right: 5px; display: inline;">
                      </a>
                      <a href="https://facebook.com/euroyacht.hr" target="_blank">
                          <img width="22" src="https://img.mysignature.io/s/d/9/a/d9a505f7-c884-5a57-bb57-0542959d3c27.png?uid=654367" alt="Facebook" style="margin-right: 5px; display: inline;">
                      </a>
                      <a href="https://tiktok.com/@euroyachtcharter" target="_blank">
                          <img width="22" src="https://img.mysignature.io/s/6/d/e/6de544ab-6792-54e1-8678-ea1ecdc699b6.png?uid=654367" alt="TikTok" style="display: inline;">
                      </a>
                  </td>
              </tr>
          </tbody>
      </table>
  </div>`;

  // Show copy button
  document.getElementById('copyButton').style.display = 'block';
}



function copySignature() {
  const signaturePreview = document.getElementById('signaturePreview');

  if (window.getSelection && document.createRange) {
    const range = document.createRange();
    range.selectNodeContents(signaturePreview);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    try {
      document.execCommand('copy');
      selection.removeAllRanges();

      const snackbar = document.getElementById('snackbar');
      snackbar.className = 'show';
      setTimeout(function () { snackbar.className = snackbar.className.replace('show', ''); }, 3000);
    } catch (err) {
      console.error('Failed to copy signature: ', err);
    }
  }
}

document.getElementById('copyButton').addEventListener('click', copySignature);
