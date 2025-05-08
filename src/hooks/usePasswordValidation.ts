import { useState, useEffect } from 'react';

/**
 * `usePasswordValidation` manages password and confirm password inputs and
 * checks for matching errors.
 * @param {string} [initialPassword] - The `initialPassword` parameter in the `usePasswordValidation`
 * function is used to set the initial value for the password state. If no value is provided when
 * calling the function, it defaults to an empty string. This initial value is then used to initialize
 * the `password` state
 * @param {string} [initialConfirmPassword] - The `initialConfirmPassword` parameter in the
 * `usePasswordValidation` function is used to set the initial value for the confirm password input
 * field. When the `usePasswordValidation` hook is called, you can provide an initial value for the
 * confirm password field. If no initial value is provided
 * @returns returns an object with the following properties and
 * methods:
 * - password
 * - confirmPassword
 * - passwordMatchError
 * - setPassword
 * - setConfirmPassword
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
