interface USER {
    id: number;
    name: string;
}
class UserModel {

    async createUser<T>(user: T): Promise<T> {
        return user;
    }
}

export { UserModel, USER };