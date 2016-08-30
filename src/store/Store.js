import { createStore } from "redux";
import reducers from "../reducers/index";
import { loadState, saveState } from "../utils/DBStorage";
import { setMemos } from "../actions/MemoActions";
import MemoVO from "../data/MemoVO";

const store = createStore(reducers);

var isLoaded = false;
loadState(function (state) {
    isLoaded = true;
    if(state !== null) {
        var memos = state.map(memo => new MemoVO(memo));
        store.dispatch(setMemos(memos));
    }
});
store.subscribe(() => {
    if(isLoaded === true) {
        saveState(store.getState().memos);
    }
});

export default store;