import { SET_ROLE } from '../actions/setRole';
const initialState = {
    role: {}
}

const role = (state = initialState, action) => {
    switch (action.type) {
        case `${SET_ROLE}`:
            return {
                ...state,
                role: action.data
            }
        default:
            return state
    }
}
export default role;
