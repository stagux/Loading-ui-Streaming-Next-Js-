// app/components/ClientComponent.js

'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function ClientComponent() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['clientData'],
    queryFn: async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts/2');
      return res.data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div>
      <h2>Client Component Data</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

