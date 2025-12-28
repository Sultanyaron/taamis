import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  he: {
    translation: {
      // Auth
      'auth.signIn': 'התחבר',
      'auth.signOut': 'התנתק',
      'auth.welcome': 'ברוכים הבאים',

      // Common
      'common.loading': 'טוען...',
      'common.error': 'שגיאה',
      'common.success': 'הצלחה',
      'common.hello': 'שלום שם',

      // Language
      'language.switch': 'עבור לערבית',

      // Navigation
      'nav.home': 'בית',
      'nav.menu': 'תפריט',
      'nav.works': 'עבודות'
    }
  },
  ar: {
    translation: {
      // Auth
      'auth.signIn': 'تسجيل الدخول',
      'auth.signOut': 'تسجيل الخروج',
      'auth.welcome': 'مرحباً',

      // Common
      'common.loading': 'جار التحميل...',
      'common.error': 'خطأ',
      'common.success': 'نجح',
      'common.hello': 'مرحباً هناك',

      // Language
      'language.switch': 'التبديل إلى العبرية',

      // Navigation
      'nav.home': 'الرئيسية',
      'nav.menu': 'القائمة',
      'nav.works': 'الأعمال'
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'he',
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false // React already escapes values
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng'
    }
  });

export default i18n;
