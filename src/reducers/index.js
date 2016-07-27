import { combineReducers } from "redux"
import LocaleReducers from "./componentReducers/LocaleReducers";

export default combineReducers({
    locale: LocaleReducers
});