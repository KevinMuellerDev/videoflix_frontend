// lib/useAuth.ts
import { API_BASE_URL } from '@/config';
import { error } from 'console';

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

      const data = await response.json();

      if (!response.ok) {
        const [[field, messages]] = Object.entries(data) as [
          string,
          string[],
        ][];
        const messagesArray = Array.isArray(messages)
          ? (messages as string[])
          : [String(messages)];

        const errMessage = messagesArray.join('\n \n');
        console.log(errMessage);

        return {
          success: false,
          error: errMessage,
        };
      }

      const token = data.auth_token;

      localStorage.setItem('token', token);
      return { success: true };
    } catch (error: any) {
      console.error(error);
      return {
        success: false,
        error: 'Network error or server unreachable.',
      };
    }
  };

  // Funktion zum Registrieren
  const signUp = async (
    email: string,
    password: string,
    re_password: string
  ) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/users/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          re_password,
        }),
      });
      const data = await response.json();

      if (!response.ok) {
        const [[field, messages]] = Object.entries(data) as [
          string,
          string[],
        ][];
        const messagesArray = Array.isArray(messages)
          ? (messages as string[])
          : [String(messages)];

        const errMessage = messagesArray.join('\n \n');
        console.log(errMessage);

        return {
          success: false,
          error: errMessage,
        };
      }

      return { success: true };
    } catch (error: any) {
      console.error('Sign Up Fehler:', error.message);
      return { success: false, error: error.message };
    }
  };

  // Funktion für die Bestätigung der Passwortzurücksetzung
  const resetPasswordConfirm = async (
    uid: string,
    token: string,
    newPassword: string
  ) => {
    try {
      const res = await fetch(
        `${API_BASE_URL}/auth/users/reset_password_confirm/`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
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

  // Funktion für die anforderung der Passwortzurücksetzung
  const resetPasswordRequest = async (email: string) => {
    try {
      const res = await fetch(`${API_BASE_URL}/auth/users/reset_password/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
        }),
      });

      if (res.ok) {
        return {
          success: true,
          message: 'An email with password reset instructions has been sent.',
        };
      } else {
        const data = await res.json();
        return {
          success: false,
          message: data?.detail || 'Error sending reset email.',
        };
      }
    } catch (error) {
      console.error('Fehler bei Passwort Zurücksetzung:', error);
      return { success: false, message: 'An unexpected error occurred.' };
    }
  };

  return { login, signUp, resetPasswordConfirm, resetPasswordRequest };
};
