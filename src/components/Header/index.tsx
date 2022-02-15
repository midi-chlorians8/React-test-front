import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { getIsAuthenticated } from 'store/auth/selectors';

import LanguageSwitcher from './LanguageSwitcher';
import * as S from './styled';

const Header = (): JSX.Element => {
  const navigate = useNavigate();
  const { t } = useTranslation('common');
  const isAuthenticated = useSelector(getIsAuthenticated);

  const logout = () => {
    navigate('auth/login');
  };

  return (
    <S.Header>
      <S.Title>{t('title')}</S.Title>
      <LanguageSwitcher />
      {!isAuthenticated ? <Link to="/auth/login">Log in</Link> : null}
      {isAuthenticated ? <button onClick={logout}>Log out</button> : null}
    </S.Header>
  );
};

export default Header;
