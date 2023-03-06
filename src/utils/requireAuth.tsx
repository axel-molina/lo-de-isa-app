import IniciarSesion from '../pages/SignIn';
import useFetchHook from '../hooks/useFetchHook';

const RequireAuth = ({ children }: any ) => {
  const { getToken } = useFetchHook();
  const token = getToken();
  if (token === '') {
    return <IniciarSesion />;
  }
  return children;
};

export default RequireAuth;
