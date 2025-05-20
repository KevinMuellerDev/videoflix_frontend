import { useState, useEffect } from 'react';

/**
 * Custom React hook to manage password and confirm password fields,
 * and to validate if both passwords match.
 *
 * @param {string} [initialPassword=''] - Initial value for the password field.
 * @param {string} [initialConfirmPassword=''] - Initial value for the confirm password field.
 * @returns  Object containing password states, error flag, and setters.
 */
export const usePasswordValidation = (
  initialPassword: string = '',
  initialConfirmPassword: string = ''
) => {
  const [password, setPassword] = useState(initialPassword);
  const [confirmPassword, setConfirmPassword] = useState(
    initialConfirmPassword
  );
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  useEffect(() => {
    if (confirmPassword !== password) {
      setPasswordMatchError(true);
    } else {
      setPasswordMatchError(false);
    }
  }, [password, confirmPassword]);

  return {
    password,
    confirmPassword,
    passwordMatchError,
    setPassword,
    setConfirmPassword,
  };
};
