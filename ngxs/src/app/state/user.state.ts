
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { User } from '../models/User';
import { AddUser } from '../actions/user.actions';
import { AppService } from '../services/app.service';
import { finalize, tap } from 'rxjs/operators';

export class UserStateModel {
    users: User[];
}



export class Reset {
    static readonly type = 'Reset';
}

@State<UserStateModel>({
    name: 'users',
    defaults: {
        users: []
    }
})
export class UserState {
    constructor(private appService: AppService) { }


    @Selector()
    static getUsers(state: UserStateModel) {
        return state.users;
    }
    //we have defined the action to save the user data into the store.
    // When the user tries to create the new user, 
    // we get those payload values here and add into the user’s state array
    //when the user is created,
    // the store will update its user state and that state is fetched by another component.
    @Action(AddUser)
    add({ getState, patchState }: StateContext<UserStateModel>, { payload }: AddUser) {
        const state = getState();
        patchState({
            users: [...state.users, payload]
        });
    }

    @Action(Reset)
    reset({ getState, setState }) {
        return this.appService.delay()
            .pipe(
                //tap(() => setState(0)),
                finalize(() => setState(1))
            );
    }


}