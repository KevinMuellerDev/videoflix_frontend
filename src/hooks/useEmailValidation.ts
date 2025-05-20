import React, { useState } from 'react';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Custom React hook to handle email input and validate its format using a regular expression.
 *
 * @returns Object containing the email state, a function to update and validate the email,
 * and the validity status (true, false, or null if not yet validated).
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
