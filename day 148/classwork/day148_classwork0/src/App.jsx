import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import UserList from "./UserList";
import ErrorFallback from "./ErrorFallback";

function App() {
  return (
    <div className="App">
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => window.location.reload()}
      >
        <UserList />
      </ErrorBoundary>
    </div>
  );
}

export default App;