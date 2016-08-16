import { ADD_MEMO } from "../../actions/MemoActions"
import { SET_ACTUAL_INFO } from "../../actions/InputActions"

const DEFAULT_STATE = {
    value: ""
};

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case SET_ACTUAL_INFO:
            return Object.assign({}, state, {
                value: action.value
            });
        case ADD_MEMO:
            return Object.assign({}, state, {
                value: ""
            });
        default:
            return state
    }
}