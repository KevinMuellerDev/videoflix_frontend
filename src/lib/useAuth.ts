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

<<<<<<< Updated upstream
export { useAuth, resetPasswordConfirm };
=======
export async function resetPasswordRequest(
  email: string
): Promise<{ success: boolean; message: string }> {
  try {
    const res = await fetch(`${API_BASE_URL}/auth_app/users/reset_password/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      return {
        success: true,
        message: 'Reset link sent. Please check your email.',
      };
    } else {
      const data = await res.json();
      return {
        success: false,
        message: data?.email?.[0] || 'Failed to send reset link.',
      };
    }
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: 'An unexpected error occurred.',
    };
  }
}

export async function resetPasswordRequest(
  email: string
): Promise<{ success: boolean; message: string }> {
  try {
    const res = await fetch(`${API_BASE_URL}/auth_app/users/reset_password/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      return {
        success: true,
        message: 'Reset link sent. Please check your email.',
      };
    } else {
      const data = await res.json();
      return {
        success: false,
        message: data?.email?.[0] || 'Failed to send reset link.',
      };
    }
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: 'An unexpected error occurred.',
    };
  }
}

export default useAuth;
>>>>>>> Stashed changes
