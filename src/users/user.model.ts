import { Pro } from 'node:fs/promises';

export default class UserModel {

    createUser<T>(user: T): Promise<T> {
        return Promise.resolve(user);
    }

        // type AsyncHandler<T> = (msg: T) => Promise<void>;
        // const botAsyncHandler = <T>(fn: AsyncHandler<T>) => async (msg: T) => {
        // try {
        //     await fn(msg);
        // } catch (error) {
        //     console.log(error.message);
        // }
        // };

    createUserAsync<T>(user: T): Promise<T> {
        return Promise.resolve(user);
    }

}