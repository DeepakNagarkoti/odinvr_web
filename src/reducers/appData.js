import { GET_APP_DATA } from '../actions/getAppData';
const initialState = {
    data: {}
}

const appData = (state = initialState, action) => {
    switch (action.type) {
        case `${GET_APP_DATA}`:
            return {
                ...state,
                data: action.data
            }
        default:
            return state
    }
}
export default appData;
