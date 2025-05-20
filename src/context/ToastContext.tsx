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

/**
 * Provides a toast notification context to child components.
 *
 * This component wraps its children and provides the ability to show and hide toast messages.
 * Toasts will automatically disappear after a few seconds, or can be dismissed manually.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The components that will have access to the toast context.
 *
 * @returns {JSX.Element} A context provider that renders toast notifications and wraps child components.
 *
 * @example
 * <ToastProvider>
 *   <App />
 * </ToastProvider>
 *
 * // Inside a child component:
 * const { showToast } = useToast();
 * showToast("This is a notification");
 */
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
