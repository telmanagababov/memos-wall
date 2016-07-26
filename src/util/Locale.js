import i18next from "i18next";

const DEFAULT_LANGUAGE = "en";

const MessageKey = {
    app: {
        TITLE: "app.TITLE"
    },

    input: {
        HINT: "input.HINT",
        APPLY: "input.APPLY"
    }
};

i18next.init({
    lng: DEFAULT_LANGUAGE,
    resources: {
        en: {
            translation: {
                app: {
                    TITLE: "Memos-wall App!"
                },
                input: {
                    HINT: "Enter a memo",
                    APPLY: "Add"
                }
            }
        }, ru: {
            translation: {
                app: {
                    TITLE: "Стена Заметок Приложение"
                },
                input: {
                    HINT: "Введите новую заметку",
                    APPLY: "Добавить"
                }
            }
        }
    }
});

export {MessageKey};
export const locale = i18next;