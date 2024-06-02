/**
 * @param {import("@trpc/server/adapters/fastify").CreateFastifyContextOptions} params
 * @returns {import("./router/types.js").TRPCContext}
 */
export function createContext({ req, res }) {
  /** @type {import("./router/types.js").User} */
  const user = {
    id: 'usr_123',
    name: 'James',
    email: 'example@tes.com',
  };

  return { req, res, user };
}

/**
 * @typedef {Awaited<ReturnType<typeof createContext>>} Context
 */
