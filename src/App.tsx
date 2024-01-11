import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./utils/requireAuth";

// Components
import Drawer from "./components/Drawer";
import { PageRoutes } from "./routes";
import Spinner from "./components/Spinner/Spinner";
import Footer from "./components/Footer";
// Pages
const Home = lazy(() => import("./pages/Home"));
const Register = lazy(() => import("./pages/Register"));
const CrearVenta = lazy(() => import("./pages/CreateSale"));
const History = lazy(() => import("./pages/History"));
const IniciarSesion = lazy(() => import("./pages/SignIn"));
const EditarStock = lazy(() => import("./pages/EditStock"));
const AddProductForm = lazy(() => import("./pages/AddProductForm"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "space-between",
      }}
    >
      <Suspense
        fallback={
          <div style={{ marginTop: "30%" }}>
            <Spinner />
          </div>
        }
      >
        <Routes>
          <Route
            path={PageRoutes.home}
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
          <Route
            path={PageRoutes.historial}
            element={
              <RequireAuth>
                <History />
              </RequireAuth>
            }
          />
          <Route
            path={PageRoutes.editStock}
            element={
              <RequireAuth>
                <EditarStock />
              </RequireAuth>
            }
          />
          <Route
            path={PageRoutes.addProduct}
            element={
              <RequireAuth>
                <AddProductForm />
              </RequireAuth>
            }
          />
          <Route path={PageRoutes.register} element={<Register />} />
          <Route path={PageRoutes.login} element={<IniciarSesion />} />
          <Route path={PageRoutes.privacyPolicy} element={<PrivacyPolicy />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Drawer />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
