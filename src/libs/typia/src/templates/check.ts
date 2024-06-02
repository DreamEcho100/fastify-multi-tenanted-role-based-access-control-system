import typia from 'typia';

import { IMember } from '../structures/IMember';
import { IUser } from '../structures/IUser';

export const memberValidator = (input: unknown) => typia.assert<IMember>(input);
export const userValidator = (input: unknown) => typia.assert<IUser>(input);

export const userCreateValidator = (input: unknown) => typia.assert<Omit<IUser, 'id'>>(input);
export const isUser = typia.is<IUser>;
