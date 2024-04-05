// CORRECT VERSION ✅ (CONFIGURED WITH CONTEXT)
import { appRouter } from '../../server';
import { createCallerFactory } from '../../server/trpc';
import { createContext } from '../../server/context';

const createCaller = createCallerFactory(appRouter);

export const serverClient = createCaller(createContext());
