import { ErrorBoundary } from "react-error-boundary";
import React from "react";
import LoadingIndicator from "./LoadingIndicator";
import { useQueryErrorResetBoundary } from "react-query";
import { Button } from "antd";

export const SuspenseComponent = ({ children }) => {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <ErrorBoundary
      onReset={reset}
      fallbackRender={({ resetErrorBoundary }) => (
        <div>
          There was an error!
          <Button onClick={() => resetErrorBoundary()}>Try again</Button>
        </div>
      )}
    >
      <React.Suspense fallback={<LoadingIndicator />}>
        {children}
      </React.Suspense>
    </ErrorBoundary>
  );
};
