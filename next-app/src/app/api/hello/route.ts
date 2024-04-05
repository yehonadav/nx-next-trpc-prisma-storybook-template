import { getDB } from '@my-project/db';

export async function GET(_request: Request) {
  const db = getDB();
  const users = await db.user.findMany({ take: 10 });
  return Response.json({ users });
}
