export default function studentsReducer(state = [], action)
{
    switch (action.type) {
        case 'StudentsAction':return action.payload;
            default:
                return state
    }
}
