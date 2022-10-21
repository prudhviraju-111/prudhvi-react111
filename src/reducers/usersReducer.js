export default function usersReducer(state = [], action)
{
    switch (action.type) {
        case 'UsersAction':
            return action.payload;

            default:
                return state
    }
}