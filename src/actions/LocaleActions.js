export const UPDATE_TRANSLATIONS = "UPDATE_TRANSLATIONS";
export const SET_LOCALE = "SET_LOCALE";

export function updateTranslations(languages, locale) {
    return { type: UPDATE_TRANSLATIONS, languages, locale };
}
export function setLocale(locale) {
    return { type: SET_LOCALE, locale };
}