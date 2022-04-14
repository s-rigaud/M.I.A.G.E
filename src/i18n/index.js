import { createI18n } from 'vue-i18n'

const messages = {
    fr: {
        ...require('@/locales/fr.json'),
    },
    en: {
        ...require('@/locales/en.json'),
    },
}

const VueI18n = new createI18n({
    locale: process.env.VUE_APP_I18N_LOCALE || 'fr',
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'fr',
    messages,
})

export default VueI18n