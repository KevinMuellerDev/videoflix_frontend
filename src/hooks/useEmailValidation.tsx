import React, { useState } from "react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function useEmailValidation() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const validateEmail = (input: string) => {
    setEmail(input);
    setIsValid(emailRegex.test(input));
  };

  return { email, setEmail: validateEmail, isValid };
}
