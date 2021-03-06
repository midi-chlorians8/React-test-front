import { useTranslation } from 'react-i18next';

const LanguageSwitcher = (): JSX.Element => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => i18n.changeLanguage(lng);

  return (
    <div>
      <button onClick={() => changeLanguage('ru')}>RU</button>
      <button onClick={() => changeLanguage('en')}>EN</button>
    </div>
  );
};

export default LanguageSwitcher;
