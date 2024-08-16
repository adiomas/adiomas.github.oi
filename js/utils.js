export const validateInput = () => {
  const fields = ['fullName', 'jobRole', 'mobile', 'email'];
  const emptyFields = fields.filter(field => !document.getElementById(field).value.trim());
  
  if (emptyFields.length > 0) {
      showError(`Please fill in all fields: ${emptyFields.join(', ')}`);
      return false;
  }
  return true;
};

export const showError = (message) => {
  const errorElement = document.getElementById('error-message');
  errorElement.textContent = message;
  errorElement.style.display = 'block';
  setTimeout(() => {
      errorElement.style.display = 'none';
  }, 3000);
};

export const showSnackbar = (message) => {
  const snackbar = document.getElementById('snackbar');
  snackbar.textContent = message;
  snackbar.className = 'show';
  setTimeout(() => { snackbar.className = snackbar.className.replace('show', ''); }, 3000);
};

export const getInputValues = () => ({
  fullName: document.getElementById('fullName').value.trim(),
  jobRole: document.getElementById('jobRole').value.trim(),
  mobile: document.getElementById('mobile').value.trim(),
  email: document.getElementById('email').value.trim()
});
