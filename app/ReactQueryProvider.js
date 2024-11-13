// app/ReactQueryProvider.js

'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useState } from 'react';

export default function ReactQueryProvider({ children }) {
  // Use a state hook to ensure `QueryClient` is instantiated only once per session
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
