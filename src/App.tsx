import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from './utils/requireAuth';

// Components
import Drawer from './components/Drawer';
import { PageRoutes } from './routes';
// Pages
const Home = lazy(() => import('./pages/Home'));
const Register = lazy(() => import('./pages/Register'));
const CrearVenta = lazy(() => import('./pages/CreateSale'));
const IniciarSesion = lazy(() => import('./pages/SignIn'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path={PageRoutes.venta}
            element={
              <RequireAuth>
                <CrearVenta />
              </RequireAuth>
            }
          />
          <Route path={PageRoutes.registro} element={<Register />} />
          <Route path={PageRoutes.iniciarSesion} element={<IniciarSesion />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Drawer />
      </Suspense>
    </div>
  );
}

export default App;
