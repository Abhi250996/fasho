/**
 * Validates an email address using a regular expression.
 *
 * @param {string} email - The string to validate as an email.
 * @returns {boolean} - True if valid, false otherwise.
 */
export const validateEmail = (email) => {
  // Regular expression for standard email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
