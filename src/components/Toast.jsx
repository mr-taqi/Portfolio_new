import { useEffect } from "react";

const Toast = ({ message, open, onClose }) => {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [open, onClose]);

  if (!open) return null;

  return (
    <button
      type="button"
      onClick={onClose}
      className="fixed right-4 top-4 z-50 rounded-md bg-green-500 px-4 py-2 text-white transition hover:bg-green-600"
    >
      <div className="flex items-center space-x-2">
        <p className="text-3xl">
          <i className="bx bx-check"></i>
        </p>
        <p className="font-bold">{message}</p>
      </div>
    </button>
  );
};
export default Toast;
