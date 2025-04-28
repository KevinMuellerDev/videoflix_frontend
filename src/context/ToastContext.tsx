import { createContext, useContext, useState, ReactNode } from 'react';
import Toast from '@/components/Toast/Toast';

type ToastContextType = {
  message: string | null;
  showToast: (message: string) => void;
  hideToast: () => void;
};

const ToastContext = createContext<ToastContextType>({
  message: null,
  showToast: () => {},
  hideToast: () => {},
});

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [message, setMessage] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const showToast = (msg: string) => {
    setMessage(msg);
    setIsClosing(false);
    setTimeout(() => {
      setIsClosing(true);
      setTimeout(() => setMessage(null), 500);
    }, 3000);
  };

  const hideToast = () => {
    setIsClosing(true);
    setTimeout(() => setMessage(null), 500);
  };

  return (
    <ToastContext.Provider value={{ message, showToast, hideToast }}>
      {children}
      {message && (
        <Toast message={message} hideToast={hideToast} isClosing={isClosing} />
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
