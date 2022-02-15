import 'react-i18next';

import common from '../../public/locales/en/common.json';
import login from '../../public/locales/en/login.json';

declare module 'react-i18next' {
  interface Resources {
    common: typeof common;
    login: typeof login;
  }
}
