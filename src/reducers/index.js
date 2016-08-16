import { combineReducers } from "redux"
import LocaleReducers from "./componentReducers/LocaleReducers";
import MemoReducers from "./componentReducers/MemoReducers";
import InputReducers from "./componentReducers/InputReducers";

export default combineReducers({
    locale: LocaleReducers,
    memos: MemoReducers,
    input: InputReducers
});