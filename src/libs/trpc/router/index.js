import { TRPCError, initTRPC } from '@trpc/server';
import { z } from 'zod';
// import { userValidator, userCreateValidator } from '../../typia/src/generated/check.js';

/** @type {Record<string, import('./types.js').User>} */
const users = {
  11: { id: '11', name: 'Alice', email: 'alice@test.com' },
  22: { id: '22', name: 'Bob', email: 'bob@test.com' },
};

export const t = /** @type {import('./types.js').T} */ (initTRPC.context().meta().create());

export const appRouter = t.router({
  sayHello: t.procedure
    .meta({ openapi: { method: 'GET', path: '/say-hello', protect: true /* 👈 */ } })
    .input(z.void()) // no input expected
    .output(z.object({ greeting: z.string() }))
    .query(({ input, ctx }) => {
      if (!ctx.user) {
        throw new TRPCError({ message: 'User not found', code: 'UNAUTHORIZED' });
      }
      return { greeting: `Hello ${ctx.user.name}!` };
    }),
  getUserById: t.procedure
    .meta({ openapi: { method: 'GET', path: '/users/{id}' } })
    .input(z.object({ id: z.string() }))
    .output(z.object({ id: z.string(), name: z.string().optional(), bio: z.string().optional() }))
    .query((opts) => {
      return users[opts.input.id]; // input type is string
    }),
  createUser: t.procedure
    .meta({ openapi: { method: 'POST', path: '/users' } })
    .input(
      z.object({
        name: z.string().min(3),
        email: z.string().max(142),
      }),
      // userCreateValidator
    )
    .output(
      z.object({ id: z.string(), name: z.string(), email: z.string().email() }),
      // userValidator,
    )
    .mutation((opts) => {
      const id = Date.now().toString();
      /** @type {import('./types.js').User} */
      const user = { id, ...opts.input };
      users[user.id] = user;
      return user;
    }),
});

// export type definition of API
// export type AppRouter = typeof appRouter;
/** @typedef {typeof appRouter} AppRouter */
