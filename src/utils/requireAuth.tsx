import IniciarSesion from '../pages/SignIn';
import { getToken } from './api_helper';

const RequireAuth = ({ children }: any) => {
  const token = getToken();
  console.log(token);
  if (token === '') {
    return <IniciarSesion />;
  }
  return children;
};

export default RequireAuth;
