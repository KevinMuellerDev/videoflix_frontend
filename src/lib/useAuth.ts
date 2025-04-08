import { API_BASE_URL } from '@/config';
import React from 'react';

const useAuth = () => {
  const login = async (email: string, password: string) => {
    try {
      const response = await fetch(API_BASE_URL + '/auth/token/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData?.non_field_errors?.[0] || 'Login failed');
      }

      const data = await response.json();
      const token = data.auth_token;

      // Speichern im localStorage (oder context o.ä.)
      localStorage.setItem('token', token);
      console.log('Login erfolgreich! Token:', token);

      // Hier kannst du z. B. redirecten
      // router.push('/dashboard');

      return { success: true };
    } catch (error: any) {
      console.error('Login Fehler:', error.message);
      return { success: false, error: error.message };
    }
  };

  return login;
};

const resetPasswordConfirm = async (
  uid: string,
  token: string,
  newPassword: string
): Promise<{ success: boolean; message: string }> => {
  try {
    const res = await fetch(
      API_BASE_URL + '/auth_app/users/reset_password_confirm/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          uid,
          token,
          new_password: newPassword,
        }),
      }
    );

    if (res.ok) {
      return { success: true, message: 'Password reset successful.' };
    } else {
      const data = await res.json();
      return {
        success: false,
        message: data?.new_password?.[0] || 'Password reset failed.',
      };
    }
  } catch (error) {
    console.error(error);
    return { success: false, message: 'An unexpected error occurred.' };
  }
};

export { useAuth, resetPasswordConfirm };
