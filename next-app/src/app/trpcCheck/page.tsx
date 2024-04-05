import { serverClient } from '../_trpc/serverClient';
import { SecondUser } from './secondUser';

export default async function Index() {
  // check trpc server client
  const firstUser = await serverClient.hello({ take: 1, skip: 0 });
  return (
    <div>
      <div>{JSON.stringify(firstUser, null, 2)}</div>
      <div>
        <SecondUser />
      </div>
    </div>
  );
}
