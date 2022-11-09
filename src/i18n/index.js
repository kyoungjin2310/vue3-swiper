import ko from '@/locales/ko.json';
import en from '@/locales/en.json';
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  locale: 'en',
  messages: {
    en,
    ko,
  },
});

export default i18n;
