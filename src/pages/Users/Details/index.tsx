import { useParams } from 'react-router-dom';

const Details = (): JSX.Element => {
  const { id } = useParams<'id'>();
  return <div>Details for user id: {`${id}`}</div>;
};

export default Details;
