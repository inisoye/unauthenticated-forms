import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

// Apps
import AuthenticatedApp from './apps/AuthenticatedApp';
import UnauthenticatedApp from './apps/UnauthenticatedApp';

const queryClient = new QueryClient();

function App() {
  const isAuthenticated = true;

  const renderedApp = isAuthenticated ? (
    <Router basename="/unauthenticated-forms">
      <AuthenticatedApp />
    </Router>
  ) : (
    <UnauthenticatedApp />
  );

  return (
    <QueryClientProvider client={queryClient}>
      {renderedApp}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
