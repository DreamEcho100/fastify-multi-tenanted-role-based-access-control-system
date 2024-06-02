import typia, { tags } from 'typia';

export type IUser = {
  id: string & tags.MinLength<2>;
  name: string & tags.MinLength<2>;
  email: string & tags.Format<'email'>;
  age?: number & tags.ExclusiveMinimum<19> & tags.Maximum<100>;
};
