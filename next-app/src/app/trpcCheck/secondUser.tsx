'use client';

import { trpc } from '../_trpc/client';

export const SecondUser = () => {
  const secondUser = trpc.hello.useQuery({ take: 1, skip: 1 });

  if (secondUser.isPending) return 'pending...';

  if (secondUser.isError) {
    console.error(secondUser.error);
    return 'error!';
  }

  if (secondUser.isFetching) return 'loading...';

  if (!secondUser.data) return 'missing data';

  return JSON.stringify(secondUser.data, null, 2);
};
