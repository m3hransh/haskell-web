import React from 'react';
import { useRouteError } from 'react-router-dom';

interface ErrorType {
  statusText?: string;
  message?: string;
}

const ErrorPage: React.FC = () => {
  const error: ErrorType = useRouteError() as ErrorType;
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div id="error-page" className="text-center p-8 bg-white shadow-md rounded-md">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
        <p className="text-lg mb-2">Sorry, an unexpected error has occurred.</p>
        <p className="text-sm text-gray-600">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
