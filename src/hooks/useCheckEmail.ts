import React from 'react';
import { API_CHECK_MAIL_URL } from '@/config';

/**
 * The function `useCheckEmail` asynchronously checks if an email exists by making a request to a
 * specified API endpoint.
 * @param {string} email - The `useCheckEmail` function is an asynchronous function that takes an email
 * address as a parameter. It then sends a request to a specified API endpoint (`API_CHECK_MAIL_URL`)
 * to check if the email exists. The function returns a boolean value indicating whether the email
 * exists or not.
 * @returns The function `useCheckEmail` is returning a boolean value. It returns `true` if the email
 * exists in the API response data, and `false` if there is an error or the email does not exist.
 */
export const useCheckEmail = async (email: string) => {
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
