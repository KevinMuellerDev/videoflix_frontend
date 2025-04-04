import React, { use } from 'react';
import { API_CHECK_MAIL_URL } from '@/config';

const useCheckEmail = async (email: string) => {
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

export default useCheckEmail;
