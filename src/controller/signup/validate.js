const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

module.exports = (name, nickName, babyName, email, password) => {

  // These errorMessages => to make debugging easier
  const errorMessages = {
    empty: { valid: false, errMessage: 'Some Fields are empty' },
    email: { valid: false, errMessage: 'Email is not valid' },
    password: { valid: false, errMessage: 'Password is not valid' },
  }

  // Empty Fields
  if (!name.trim() || !nickName.trim() || !babyName.trim()
    || !email.trim() || !password.trim()) return errorMessages.empty;

  // Valid Email
  if (!emailRegex.test(email.trim())) return errorMessages.email;

  // Password length: 6 at least
  if ((password.trim()).length < 6) return errorMessages.password;

  // Success
  return { valid: true }
}