import { z } from 'zod';
import { getDB } from '@my-project/db';
import { publicProcedure, router } from './trpc';

export const appRouter = router({
  // the 'ctx' argument should now hold the session.
  getSession: publicProcedure.query(async ({ ctx }) => {
    // return ctx.session // the type is "Session | null" as we expect.
    return {};
  }),

  hello: publicProcedure
    .input(
      z.object({
        take: z.number().min(0).max(100).default(10),
        skip: z.number().min(0).default(0),
      })
    )
    .query(async ({ input: { take, skip } }) => {
      const db = getDB();
      const users = await db.user.findMany({ take, skip });
      return { users };
    }),
});

export type AppRouter = typeof appRouter;
