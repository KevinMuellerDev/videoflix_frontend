// lib/useAuth.ts
import { API_BASE_URL } from '@/config';

export const useAuth = () => {
  // Login-Funktion
  const login = async (email: string, password: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/token/login/`, {
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

      // Speichern im localStorage
      localStorage.setItem('token', token);
      console.log('Login erfolgreich! Token:', token);

      return { success: true };
    } catch (error: any) {
      console.error('Login Fehler:', error.message);
      return { success: false, error: error.message };
    }
  };

  const signUp = async (email: string, password: string, re_password: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/users/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          re_password
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData?.detail || 'Sign Up failed');
      }

      const data = await response.json();
      console.log('Sign Up erfolgreich!', data);

      return { success: true };
    } catch (error: any) {
      console.error('Sign Up Fehler:', error.message);
      return { success: false, error: error.message };
    }
  };



  // Funktion für die Passwortzurücksetzung


  return { login,signUp };
};

export const resetPasswordConfirm = async (uid: string, token: string, newPassword: string) => {
  try {
    const res = await fetch(`${API_BASE_URL}/auth/users/reset_password_confirm/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        uid,
        token,
        new_password: newPassword,
      }),
    });

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
    console.error('Fehler bei Passwort Zurücksetzung:', error);
    return { success: false, message: 'An unexpected error occurred.' };
  }
};

export const resetPasswordRequest = async (email: string) => {
  try {
    const res = await fetch(`${API_BASE_URL}/auth/users/reset_password/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
      }),
    });

    if (res.ok) {
      return { success: true, message: 'An email with password reset instructions has been sent.' };
    } else {
      const data = await res.json();
      return { success: false, message: data?.detail || 'Error sending reset email.' };
    }
  } catch (error) {
    console.error('Fehler bei Passwort Zurücksetzung:', error);
    return { success: false, message: 'An unexpected error occurred.' };
  }
};