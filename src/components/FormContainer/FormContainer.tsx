import React from 'react';
import styles from '@/components/FormContainer/FormContainer.module.css';

interface FormProps {
  children: React.ReactNode;
  formTitle: string;
}

/**
 * `FormContainer` is a reusable layout component for wrapping authentication forms
 * like login, signup, or password reset. It displays a title above the form content.
 *
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The form or content to be rendered inside the container
 * @param {string} props.formTitle - The title displayed above the form
 *
 * @returns {JSX.Element} A styled container with a heading and form content.
 *
 * @example
 * <FormContainer formTitle="Log In">
 *   <LoginForm />
 * </FormContainer>
 */
const FormContainer = ({ children, formTitle }: FormProps) => {
  return (
    <div className={styles.loginContent}>
      <h1 style={{ color: 'var(--white-text)', marginBottom: '2rem' }}>
        {formTitle}
      </h1>
      {children}
    </div>
  );
};

export default FormContainer;
