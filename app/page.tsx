// app/page.js

import { Suspense } from 'react';
import LoadingSpinner from './components/LoadingSpinner';
import ServerComponent from './components/ServerComponent';
import ClientComponent from './components/ClientComponent';

export default function Page() {
  return (
    <div>
      <h1>Loading and Streaming Example</h1>

      <Suspense fallback={<LoadingSpinner />}>
        <ServerComponent />
      </Suspense>

      <ClientComponent />

    </div>
  );
}
