import React from 'react';
import { API_CHECK_MAIL_URL } from '@/config';

/**
 * Checks whether an email address is already registered in the system.
 *
 * @param {string} email - The email address to check.
 * @returns {Promise<boolean>} A promise that resolves to `true` if the email exists, otherwise `false`.
 *
 * @throws {Error} If the request fails, throws an error with a descriptive message.
 *
 * @example
 * const exists = await useCheckEmail('test@example.com');
 * if (exists) {
 *   console.log('Email is already registered');
 * }
 */
export const checkEmailExists = async (email: string) => {
  try {
    const response = await fetch(
      API_CHECK_MAIL_URL + `?email=${encodeURIComponent(email)}`
    );
    const data = await response.json();
    return data.exists;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
    return false;
  }
};
