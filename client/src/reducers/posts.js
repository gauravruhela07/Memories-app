import {CREATE, UPDATE, DELETE, FETCH_ALL} from '../constants/actionTypes';

const reducer = (post_state = [], action) => {
    switch (action.type) {
        case DELETE:
            return post_state.filter((post) => post._id !== action.payload);
        case UPDATE:
            return post_state.map((post) => post._id===action.payload._id ? action.payload : post);
        case CREATE:
            return [...post_state, action.payload];
        case FETCH_ALL:
            return action.payload;
        default:
            return post_state;
    }
}

export default reducer;