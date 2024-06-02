import { tags } from 'typia';
import { z } from 'zod';

const zTest = z.object({
  fullName: z.string().min(2),
});

export type IMember = {
  id: string & tags.Format<'uuid'>;
  email: string & tags.Format<'email'>;
  age: number & tags.ExclusiveMinimum<19> & tags.Maximum<100>;
  test: string & tags.Format<'uuid'>;
} & z.infer<typeof zTest>;
