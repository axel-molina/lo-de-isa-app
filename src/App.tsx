import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from './utils/requireAuth';

// Components
import Header from './components/Header';
import Drawer from './components/Drawer';
// Pages
const Home = lazy(() => import('./pages/Home'));
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
            path="/venta"
            element={
              <RequireAuth>
                <CrearVenta />
              </RequireAuth>
            }
          />
          <Route path="/iniciar-sesion" element={<IniciarSesion />} />
        </Routes>
        <Drawer />
      </Suspense>
    </div>
  );
}

export default App;
