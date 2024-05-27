import KSUID from 'ksuid';

export const createId = () => KSUID.random().then((ksuid) => ksuid.string);
