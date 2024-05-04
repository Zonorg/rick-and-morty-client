const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/;

export function validate(objUser) {
  const errors = {};

  if (!regexEmail.test(objUser.username)) {
    errors.username = "*Provide a valid email";
  } else if (!objUser.username) {
    errors.username = "*Username cannot be empty";
  } else if (objUser.username.length > 35) {
    errors.username = "*Username cannot have more than 35 characters";
  }

  if (!regexPassword.test(objUser.password)) {
    errors.password = "*Password must have at least 1 number";
  } else if (objUser.password.length < 6 || objUser.password.length > 10) {
    errors.password = "*Password must be between 6 and 10 characters";
  }
  return errors;
}
