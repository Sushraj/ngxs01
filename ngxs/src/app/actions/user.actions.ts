import { User } from '../models/User';

export class AddUser {
    static readonly type = '[User API] AddItemToIndexpage';

    constructor(public payload: User) { }
}