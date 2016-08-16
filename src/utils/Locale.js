import i18next from "i18next";
import Backend from "i18next-xhr-backend";
import store from "../store/Store";
import {initTranslations, updateTranslations} from "../actions/LocaleActions"

const Options = {
    lng: "en",
    fallbackLng: "en",
    preload: ["en", "ru"],
    backend: {
        loadPath: "../../assets/locales/{{lng}}/locale.json"
    }
    // debug: true
};

const onReady = () => {
    store.dispatch(initTranslations(Options.preload, i18next.language));

    store.subscribe(() => {
        if (i18next.language !== store.getState().locale.currentLocale) {
            i18next.changeLanguage(store.getState().locale.currentLocale, () => {
                store.dispatch(updateTranslations());
            });
        }
    });
};

export default {
    init() {
        i18next
            .use(Backend)
            .init(Options, onReady);
    },
    getMessage(id) {
        return i18next.t(id);
    }
}