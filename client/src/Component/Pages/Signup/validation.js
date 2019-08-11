const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function (type, value1, value2) {
  let validationMessage;

  // Validation Functions

  this.isEmpty = value => value.trim() ? false : true;
  this.isEmailValid = email => emailRegex.test(email);
  this.isPasswordStrong = pass => pass.length >= 6;
  this.doPasswordsMatch = (pass1, pass2) => pass1 === pass2;

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
      validationMessage = !this.isEmailValid(value1) && this.emailError;
      break;

    case 'password':
      validationMessage = !this.isPasswordStrong(value1) && this.passwordError;
      break;

    case 'confirmPassword':
      validationMessage = !this.doPasswordsMatch(value1, value2) && this.passwordsError;
      break;

    default: return false;
  }
  return validationMessage;
}
