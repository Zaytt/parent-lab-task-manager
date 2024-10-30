interface AlertProps {
  type: 'error' | 'success' | 'warning';
  message: string;
}

export const Alert = ({ type, message }: AlertProps) => {
  const styles = {
    error: {
      wrapper: 'bg-red-50 border-red-200',
      text: 'text-red-700',
      icon: 'text-red-400',
    },
    success: {
      wrapper: 'bg-green-50 border-green-200',
      text: 'text-green-700',
      icon: 'text-green-400',
    },
    warning: {
      wrapper: 'bg-yellow-50 border-yellow-200',
      text: 'text-yellow-700',
      icon: 'text-yellow-400',
    },
  }[type];

  return (
    <div className={`p-4 rounded-md border ${styles.wrapper}`}>
      <div className="flex">
        <div className="flex-shrink-0">
          <svg className={`h-5 w-5 ${styles.icon}`} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3">
          <p className={`text-sm ${styles.text}`}>{message}</p>
        </div>
      </div>
    </div>
  );
};