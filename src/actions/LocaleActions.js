export const INIT_TRANSLATIONS = "INIT_TRANSLATIONS";
export const UPDATE_TRANSLATIONS = "UPDATE_TRANSLATIONS";
export const SET_LOCALE = "SET_LOCALE";

export function initTranslations(languages, locale) {
    return { type: INIT_TRANSLATIONS, languages, locale };
}
export function updateTranslations() {
    return { type: UPDATE_TRANSLATIONS };
}
export function setLocale(locale) {
    return { type: SET_LOCALE, locale };
}