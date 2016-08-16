import { ADD_MEMO, REMOVE_MEMO } from "../../actions/MemoActions"
import MemoVO from "../../data/MemoVO"

const DEFAULT_STATE = [],
    URL_PATTERN = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi,
    TITLE_LENGTH = 10;

const toMemo = (data, id) => {
    var url = data.match(URL_PATTERN),
        memo = new MemoVO();
    memo.id = id;
    memo.title = data.slice(0, TITLE_LENGTH);
    memo.info = data;
    memo.url = url ? url[0] : "";
    return memo;
};

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case ADD_MEMO:
            var id = state.length ? state[state.length - 1].id + 1 : 0;
            return action.data ? state.concat([
                toMemo(action.data, id)
            ]) : state;
        case REMOVE_MEMO:
            var index = state.findIndex(memo => memo.id === action.id);
            return state.slice(0, index).concat(state.slice(index + 1));
        default:
            return state
    }
}