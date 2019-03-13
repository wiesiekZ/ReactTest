class EmailValidator {
  validateEmail(email) {
    var emailPattern =
      "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
    return new RegExp(emailPattern).test(
      String(email)
        .trim()
        .toLowerCase()
    );
  }
}

export default EmailValidator;
