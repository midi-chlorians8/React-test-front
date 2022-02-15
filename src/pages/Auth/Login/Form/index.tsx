import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';

import { schema } from './validation';

export type FormData = {
  email: string;
  password: string;
};

type Props = {
  onSubmit: (values: FormData) => void;
};

const Form = ({ onSubmit }: Props): JSX.Element => {
  const { t } = useTranslation(['login']);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>{t('login:email')}</label>
        <input {...register('email')} />
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <label>{t('login:password')}</label>
        <input {...register('password')} />
        <p>{errors.password?.message}</p>
      </div>
      <input type="submit" />
    </form>
  );
};

export default Form;
