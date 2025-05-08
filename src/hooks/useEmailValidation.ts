import React, { useState } from 'react';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * `useEmailValidation` manages email validation state
 * and provides a way to validate email input.
 * @returns The `useEmailValidation` custom hook is being returned. It includes the `email` state
 * variable, the `validateEmail` function to set and validate the email input, and the `isValid` state
 * variable to track if the email is valid according to the `emailRegex` pattern.
 */
export const useEmailValidation = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const validateEmail = (input: string) => {
    setEmail(input);
    setIsValid(emailRegex.test(input));
  };

  return { email, setEmail: validateEmail, isValid };
};
