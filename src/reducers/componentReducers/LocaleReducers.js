import { UPDATE_TRANSLATIONS, SET_LOCALE } from "../../actions/LocaleActions"

const defaultState = {
    isLocaleReady: false,
    locales: "",
    currentLocale: ""
};

export default function (state = defaultState, action) {
    switch (action.type) {
        case UPDATE_TRANSLATIONS:
            return Object.assign({}, state, {
                isLocaleReady: true,
                locales: action.languages,
                currentLocale: action.locale
            });
        case SET_LOCALE:
            return Object.assign({}, state, {
                isLocaleReady: false,
                currentLocale: action.locale
            });
        default:
            return state
    }
}