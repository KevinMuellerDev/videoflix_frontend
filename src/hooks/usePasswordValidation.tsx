import { useState, useEffect } from "react";

function usePasswordValidation(
  initialPassword: string = "",
  initialConfirmPassword: string = ""
) {
  const [password, setPassword] = useState(initialPassword);
  const [confirmPassword, setConfirmPassword] = useState(
    initialConfirmPassword
  );
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  useEffect(() => {
    if (confirmPassword !== password) {
      setPasswordMatchError(true);
    } else {
      setPasswordMatchError(false);
    }
  }, [password, confirmPassword]);

  return {
    password,
    confirmPassword,
    passwordMatchError,
    setPassword,
    setConfirmPassword,
  };
}

export default usePasswordValidation;
