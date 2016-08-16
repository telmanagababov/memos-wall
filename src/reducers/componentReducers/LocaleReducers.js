import { INIT_TRANSLATIONS, UPDATE_TRANSLATIONS, SET_LOCALE } from "../../actions/LocaleActions"
import locale from "../../utils/Locale";
import MessagesVO from "../../data/MessagesVO"

const getMessages = () => {
    var messages = new MessagesVO();
    messages.app.TITLE = locale.getMessage("app.TITLE");
    messages.input.APPLY =  locale.getMessage("input.APPLY");
    messages.input.HINT =  locale.getMessage("input.HINT");
    messages.memo.MORE =  locale.getMessage("memo.MORE");
    messages.memo.REMOVE =  locale.getMessage("memo.REMOVE");
    return messages;
};

const DEFAULT_STATE = {
    locales: "",
    currentLocale: "",
    messages: new MessagesVO()
};

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case INIT_TRANSLATIONS:
            return Object.assign({}, state, {
                locales: action.languages,
                currentLocale: action.locale,
                messages: getMessages()
            });
        case UPDATE_TRANSLATIONS:
            return Object.assign({}, state, {
                messages: getMessages()
            });
        case SET_LOCALE:
            return Object.assign({}, state, {
                currentLocale: action.locale
            });
        default:
            return state
    }
}