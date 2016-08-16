import { createStore } from "redux";
import reducers from "../reducers/index";
import { loadState, saveState } from "../utils/LocaleStorage";

const store = createStore(reducers, loadState());

store.subscribe(() => {
    saveState(store.getState());
});

export default store;