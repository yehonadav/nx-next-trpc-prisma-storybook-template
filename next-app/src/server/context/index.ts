// Here is an example storing a next-auth session in context.
// This 'session' will therefore be available in any tRPC procedure.

// import { auth } from "@/lib/auth"

export const createContext = async () => {
  // const session = await auth()

  return {
    // session,
  };
};
