// lib/useAuth.ts
import { API_BASE_URL } from '@/config';

/**
 * Custom hook providing authentication-related functions for login,
 * sign-up, password reset request, and password reset confirmation.
 *
 * Each function interacts with the backend API and returns
 * a standardized result object indicating success or failure,
 * along with error or success messages.
 *
 * Functions:
 * - login(email, password): Authenticate user and store auth token.
 * - signUp(email, password, re_password): Register a new user.
 * - resetPasswordConfirm(uid, token, newPassword, confirmPassword): Confirm password reset.
 * - resetPasswordRequest(email): Request a password reset email.
 *
 * @returns {object} An object containing auth functions.
 */
export const useAuth = () => {
  /**
   * Attempts to log in a user with the provided email and password.
   * On success, saves the auth token to localStorage.
   *
   * @param {string} email - The user's email address.
   * @param {string} password - The user's password.
   * @returns {Promise<{success: boolean, error?: string}>} Result of the login attempt.
   */

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

  /**
   * Registers a new user with the given email and password.
   *
   * @param {string} email - The email address for registration.
   * @param {string} password - The password for registration.
   * @param {string} re_password - Confirmation of the password.
   * @returns {Promise<{success: boolean, error?: string}>} Result of the registration attempt.
   */
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

  /**
   * Confirms a password reset using UID and token, setting a new password.
   *
   * @param {string} uid - User identifier.
   * @param {string} token - Password reset token.
   * @param {string} newPassword - New password to set.
   * @param {string} confirmPassword - Confirmation of the new password.
   * @returns {Promise<{success: boolean, message: string}>} Result of the password reset confirmation.
   */
  const resetPasswordConfirm = async (
    uid: string,
    token: string,
    newPassword: string,
    confirmPassword: string
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
            confirm_password: confirmPassword,
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

  /**
   * Requests a password reset email to be sent to the provided email address.
   *
   * @param {string} email - Email address to send the reset instructions.
   * @returns {Promise<{success: boolean, message: string}>} Result of the reset password request.
   */
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
