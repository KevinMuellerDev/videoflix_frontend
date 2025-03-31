import Toast from "@/components/Toast/Toast";
import { createContext, useContext, useState, ReactNode } from "react";

interface IToastContextType {
  message: string | null;
  showToast: (message: string) => void;
  hideToast: () => void;
}

const ToastContext = createContext<IToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setMessage(msg);
  };

  const hideToast = () => setMessage(null);

  return (
    <ToastContext.Provider value={{ message, showToast, hideToast }}>
      {children}
      {message && <Toast message={message} hideToast={hideToast} />}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
