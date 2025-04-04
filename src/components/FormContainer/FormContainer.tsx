import React from 'react';
import styles from '@/components/FormContainer/FormContainer.module.css';

interface FormProps {
  children: React.ReactNode;
  formTitle: string;
}

const FormContainer = ({ children, formTitle }: FormProps) => {
  return (
    <div className={styles.loginContent}>
      <h1 style={{ color: 'var(--primary-color)', marginBottom: '2rem' }}>
        {formTitle}
      </h1>
      {children}
    </div>
  );
};

export default FormContainer;
