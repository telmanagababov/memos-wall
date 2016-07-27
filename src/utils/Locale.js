import i18next from "i18next";
import Backend from "i18next-xhr-backend";
import store from "../store/Store";
import {updateTranslations} from "../actions/LocaleActions"

const MessageKey = {
    app: {
        TITLE: "app.TITLE"
    },

    input: {
        HINT: "input.HINT",
        APPLY: "input.APPLY"
    }
};

const Options = {
    lng: "en",
    fallbackLng: "en",
    preload: ["en", "ru"],
    backend: {
        loadPath: "../../assets/locales/{{lng}}/locale.json"
    }
    // debug: true
};

const onLanguageUpdated = () => {
    store.dispatch(updateTranslations(Options.preload, i18next.language));
};

store.subscribe(() => {
    if(i18next.language !== store.getState().locale.currentLocale) {
        i18next.changeLanguage(store.getState().locale.currentLocale, onLanguageUpdated);
    }
});

i18next
    .use(Backend)
    .init(Options, onLanguageUpdated);

export {MessageKey};
export const locale = {
    getMessage: id => i18next.t(id)
};