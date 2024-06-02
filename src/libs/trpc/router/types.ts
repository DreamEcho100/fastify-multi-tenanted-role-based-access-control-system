import { initTRPC } from '@trpc/server';
import { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify';
import {
  CreateOpenApiFastifyPluginOptions,
  OpenApiMeta,
  fastifyTRPCOpenApiPlugin,
} from 'trpc-openapi';
import { buildServer } from '../../../utils/server.js';
import { AppRouter, appRouter } from './index.js';
import { createContext } from '../context.js';

export type User = { id: string; name: string; email: string };

const users: User[] = [
  {
    id: 'usr_123',
    name: 'James',
    email: 'example@tes.com',
  },
];

export type TRPCContext = {
  user: User | null;
} & Pick<CreateFastifyContextOptions, 'req' | 'res'>;
const t = initTRPC.context<TRPCContext>().meta<OpenApiMeta>().create();

export type T = typeof t;
