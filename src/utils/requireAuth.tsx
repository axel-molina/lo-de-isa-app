import IniciarSesion from '../pages/SignIn';
import useFetchHook from '../hooks/useLoginHook';
import { getToken } from './token';

const RequireAuth = ({ children }: any ) => {
  const token = getToken();
  if (token === '') {
    return <IniciarSesion />;
  }
  return children;
};

export default RequireAuth;
