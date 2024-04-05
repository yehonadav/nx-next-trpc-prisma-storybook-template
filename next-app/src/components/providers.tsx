'use client';

import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import superjson from 'superjson';

import { trpc } from '../app/_trpc/client';
import { clientEnv } from '../constants/clientEnv';

interface ProviderProps {
  children: React.ReactNode;
}

export function Provider({ children }: ProviderProps) {
  const [queryClient] = useState(() => new QueryClient({}));

  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          transformer: superjson,
          url: `${clientEnv.apiUrl}/trpc`,
        }),
      ],
    })
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}
