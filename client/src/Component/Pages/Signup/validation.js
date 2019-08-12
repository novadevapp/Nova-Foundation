const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function (type, value1, value2) {
  let validationMessage;

  // Error Messages

  this.emailError = 'Email is not valid';
  this.passwordError = 'Password should contain at least 6 characters';
  this.passwordsError = 'Passwords don\'t match';
  this.emptyError = 'Please fill this input';

  // If any of the values are empty

  if (this.isEmpty(value1)) {
    return this.emptyError;
  }

  // If values are not empty

  switch (type) {

    case 'email':
      validationMessage = !emailRegex.test(value1) && this.emailError;
      break;

    case 'password':
      validationMessage = !value1.length >= 6 && this.passwordError;
      break;

    case 'confirmPassword':
      validationMessage = value1 !== value2 && this.passwordsError;
      break;

    default: return false;  // No Errors
  }
  return validationMessage;
}
