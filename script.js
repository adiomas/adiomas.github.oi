function generateSignature() {
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
  // signaturePreview.innerHTML = `
  //   <div style="text-align: left;">
  //       <div style="font-family: Helvetica; font-size: 12px; font-weight: normal;">--</div><br><br>
  //       <table cellpadding="0" cellspacing="0" style="vertical-align: -webkit-baseline-middle; width: 100%;">
  //           <tbody>
  //               <tr>
  //                   <td style="vertical-align: top; width: 55px;">
  //                       <img style="width: 55px;" src="${imageURL}" width="55">
  //                   </td>
  //                   <td style="width: 20px;"></td>
  //                   <td style="padding: 0px; vertical-align: middle;">
  //                       <h3 style="margin: 0px; font-size: 14px; font-weight: normal;">${fullName}</h3>
  //                       <p style="margin: 0px 0px 5px; font-size: 13px; line-height: 20px; color: rgb(102, 102, 102);">${jobRole}</p>
  //                       <div style="border-bottom: 1px solid rgb(153, 153, 153); border-top: 1px solid rgb(153, 153, 153); padding: 8px 0px;">
  //                           <p style="color: rgb(102, 102, 102); font-weight: bold; font-size: 12px; margin: 0px; line-height: 15px;">Dive into Croatia's Wonders:<br>Begin Your Adventure</p>
  //                       </div>
  //                       <table cellpadding="0" cellspacing="0" style="vertical-align: -webkit-baseline-middle;">
  //                           <tbody>
  //                               <tr style="vertical-align: middle;">
  //                                   <td style="vertical-align: middle;">
  //                                       <ul style="padding: 10px 0px 0px; margin: 0px; list-style-type: none;">
  //                                           <li style="font-size: 12px; color: black; line-height: 15px;">
  //                                               <img src="${phoneLogo}" style="width: 16px; vertical-align: middle;" width="16">&nbsp; <a href="tel://${mobile}" style="color: black;" target="_blank">${mobile}</a>
  //                                           </li>
  //                                           <li style="font-size: 12px; color: black; line-height: 15px;">
  //                                               <img src="${emailLogo}" style="width: 16px; vertical-align: middle;" width="16">&nbsp; <a href="mailto:${email}" style="color: black;" target="_blank">${email}</a>
  //                                           </li>
  //                                           <li style="font-size: 12px; color: black; line-height: 15px;">
  //                                               <img src="${webLogo}" style="width: 16px; vertical-align: middle;" width="16">&nbsp; <a href="${website}" style="color: black;" target="_blank">EuroYacht</a>
  //                                           </li>
  //                                       </ul>
  //                                   </td>
  //                               </tr>
  //                           </tbody>
  //                       </table>
  //                       <table cellpadding="0" cellspacing="0" style="vertical-align: -webkit-baseline-middle; padding-top: 5px;">
  //                       <tbody>
  //                           <tr>
  //                               <td>
  //                                   <a href="https://instagram.com/euroyacht" target="_blank">
  //                                       <img src="${instagramLogo}" style="width: 24px; vertical-align: middle; margin-right: 5px;" width="24"></a>
  //                                   <a href="https://facebook.com/euroyacht.hr" target="_blank">
  //                                       <img src="${facebookLogo}" style="width: 24px; vertical-align: middle; margin-right: 5px;" width="24"></a>
  //                                   <a href="https://tiktok.com/@euroyachtcharter" target="_blank">
  //                                       <img src="${tiktokLogo}" style="width: 24px; vertical-align: middle;" width="24"></a>
  //                               </td>
  //                           </tr>
  //                       </tbody>
  //                   </table>
  //                   </td>
  //               </tr>
  //           </tbody>
  //       </table>
  //   </div>
  // `;
  // signaturePreview.innerHTML = `<div>
  //   <table cellpadding="0" width="300" style="border-collapse: collapse; font-size: 13.4px;">
  //       <tbody>
  //           <tr>
  //               <td style="margin: 0.1px; padding: 0px;">
  //                   <table cellpadding="0" style="border-collapse: collapse; text-align: left;">
  //                       <tbody>
  //                           <tr>
  //                               <td valign="top" style="margin: 0.1px; padding: 0px 12px 0px 0px;">
  //                                   <a href="${website}" target="_blank">
  //                                       <img src="${imageURL}" width="100" alt="Euroyacht" style="display: block; min-width: 100px;">
  //                                   </a>
  //                               </td>
  //                               <td valign="top" style="border-left-width: 1px; border-left-style: solid; border-left-color: rgb(35, 71, 149); margin: 0.1px; padding: 0px 0px 0px 12px; font-family: Arial, Helvetica, sans-serif;">
  //                                   <table cellpadding="0" style="border-collapse: collapse;">
  //                                       <tbody>
  //                                           <tr>
  //                                               <td style="margin: 0.1px; padding: 0px 0px 8px; font-weight: 600; font-size: 17.5px; color: rgb(35, 71, 149);">
  //                                                   ${fullName}
  //                                               </td>
  //                                           </tr>
  //                                           <tr>
  //                                               <td style="margin: 0.1px; padding: 0px 0px 8px; font-size: 13.4px; color: rgb(0, 0, 1);">
  //                                                   <span>${jobRole}</span>
  //                                               </td>
  //                                           </tr>
  //                                           <tr>
  //                                               <td style="margin: 0.1px; padding: 0px; font-size: 13.4px; color: rgb(0, 0, 1);">
  //                                                   <span style="color: rgb(35, 71, 149); font-weight: 600;">phone:&nbsp;</span>
  //                                                   <a href="tel://${mobile}" target="_blank" style="color: rgb(0, 0, 1); text-decoration: none;">
  //                                                       ${mobile}
  //                                                   </a>
  //                                               </td>
  //                                           </tr>
  //                                           <tr>
  //                                               <td style="margin: 0.1px; padding: 0px; font-size: 13.4px; color: rgb(0, 0, 1);">
  //                                                   <span style="color: rgb(35, 71, 149); font-weight: 600;">email:&nbsp;</span>
  //                                                   <a href="mailto:${email}" target="_blank" style="color: rgb(0, 0, 1); text-decoration: none;">
  //                                                       ${email}
  //                                                   </a>
  //                                               </td>
  //                                           </tr>
  //                                           <tr>
  //                                               <td style="margin: 0.1px; padding: 0px; font-size: 13.4px; color: rgb(0, 0, 1);">
  //                                                   <span style="color: rgb(35, 71, 149); font-weight: 600;">website: &nbsp;</span>
  //                                                   <a href="${website}" target="_blank" style="color: rgb(0, 0, 1); text-decoration: none;">www.euroyacht.hr
  //                                                   </a>
  //                                               </td>
  //                                           </tr>
  //                                           <tr>
  //                                               <td style="margin: 0.1px; padding: 12px 0px 0px; font-size: 13.4px; color: rgb(0, 0, 1);">
  //                                                   <table cellpadding="0" style="border-collapse: collapse;">
  //                                                       <tbody>
  //                                                           <tr>
  //                                                               <td style="margin: 0.1px; padding: 0px 5px 0px 0px;">
  //                                                                   <a href="https://instagram.com/euroyacht" target="_blank">
  //                                                                       <img width="22" src="https://img.mysignature.io/s/1/f/a/1faf0ad2-8164-56d0-9b65-6d62a56cd22c.png?uid=654367" alt="Instagram" style="display: block;">
  //                                                                   </a>
  //                                                               </td>
  //                                                               <td style="margin: 0.1px; padding: 0px 5px 0px 0px;">
  //                                                                   <a href="https://facebook.com/euroyacht.hr" target="_blank">
  //                                                                       <img width="22" src="https://img.mysignature.io/s/d/9/a/d9a505f7-c884-5a57-bb57-0542959d3c27.png?uid=654367" alt="Facebook" style="display: block;">
  //                                                                   </a>
  //                                                               </td>
  //                                                               <td style="margin: 0.1px; padding: 0px 5px 0px 0px;">
  //                                                                   <a href="https://tiktok.com/@euroyachtcharter" target="_blank">
  //                                                                       <img width="22" src="https://img.mysignature.io/s/6/d/e/6de544ab-6792-54e1-8678-ea1ecdc699b6.png?uid=654367" alt="TikTok" style="display: block;">
  //                                                                   </a>
  //                                                               </td>
  //                                                           </tr>
  //                                                       </tbody>
  //                                                   </table>
  //                                               </td>
  //                                           </tr>
  //                                       </tbody>
  //                                   </table>
  //                               </td>
  //                           </tr>
  //                       </tbody>
  //                   </table>
  //               </td>
  //           </tr>
  //       </tbody>
  //   </table>
  // </div>
  //   `;

  signaturePreview.innerHTML = `<div class="email-signature">
    <table cellpadding="0" width="300" style="border-collapse: collapse; font-size: 10px;">
        <tbody>
            <tr>
                <td style="margin: 0.1px; padding: 0px;">
                    <table cellpadding="0" style="border-collapse: collapse; text-align: left;">
                        <tbody>
                            <tr>
                                <td valign="top" style="margin: 0.1px; padding: 0px 12px 0px 0px;">
                                    <a href="${website}" target="_blank">
                                        <img src="${imageURL}" width="80" alt="Euroyacht" style="display: block; min-width: 80px;">
                                    </a>
                                </td>
                                <td valign="top" style="border-left-width: 1px; border-left-style: solid; border-left-color: rgb(35, 71, 149); margin: 0.1px; padding: 0px 0px 0px 12px; font-family: Arial, Helvetica, sans-serif;">
                                    <table cellpadding="0" style="border-collapse: collapse;">
                                        <tbody>
                                            <tr>
                                                <td style="margin: 0.1px; padding: 0px 0px 8px; font-weight: 600; font-size: 13px; color: rgb(35, 71, 149);">
                                                    ${fullName}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="margin: 0.1px; padding: 0px 0px 8px; font-size: 10px; color: rgb(0, 0, 1);">
                                                    <span>${jobRole}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="margin: 0.1px; padding: 0px; font-size: 10px; color: rgb(0, 0, 1);">
                                                    <span style="color: rgb(35, 71, 149); font-weight: 600;">phone:&nbsp;</span>
                                                    <a href="tel://${mobile}" target="_blank" style="color: rgb(0, 0, 1); text-decoration: none;">
                                                        ${mobile}
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="margin: 0.1px; padding: 0px; font-size: 10px; color: rgb(0, 0, 1);">
                                                    <span style="color: rgb(35, 71, 149); font-weight: 600;">email:&nbsp;</span>
                                                    <a href="mailto:${email}" target="_blank" style="color: rgb(0, 0, 1); text-decoration: none;">
                                                        ${email}
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="margin: 0.1px; padding: 0px; font-size: 10px; color: rgb(0, 0, 1);">
                                                    <span style="color: rgb(35, 71, 149); font-weight: 600;">website: &nbsp;</span>
                                                    <a href="${website}" target="_blank" style="color: rgb(0, 0, 1); text-decoration: none;">www.euroyacht.hr
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="margin: 0.1px; padding: 12px 0px 0px; font-size: 10px; color: rgb(0, 0, 1);">
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
