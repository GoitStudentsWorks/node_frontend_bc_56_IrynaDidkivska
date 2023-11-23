import { Route, Routes } from "react-router-dom";
import SharedLayout from "./shared/components/SharedLayout/SharedLayout";
import { routes } from "./shared/services/routes";
import { Suspense, lazy, useEffect } from "react";
import { PrivateRoute, PublicRoute } from "./shared/HOC";
import NotFound from "./pages/NotFound/NotFound";
import {
  AddDrink,
  Drinks,
  DrinkWithID,
  Favorites,
  HomePage,
  MyDrinks,
} from "./pages";
import { ThemeProvider } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { darkTheme, lightTheme } from "./shared/styles/theme";
import { Global } from "./shared/styles/Global";
import { currentUserThunk } from "./redux/Auth/operations";
import Loader from "./shared/components/Loader/Loader";
const Welcome = lazy(() =>
  import("./modules/welcome/components/Welcome/Welcome")
);

function App() {
  const { theme } = useSelector((state) => state.theme);
  const isRefresh = useSelector((state) => state.auth.isRefresh);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUserThunk());
  }, [dispatch]);

  return isRefresh ? (
    <Loader />
  ) : (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <Global />
      <Suspense>
        <Routes>
          <Route path={routes.ROOT} element={<SharedLayout />}>
            <Route
              path={routes.HOME}
              element={
                <PrivateRoute>
                  <HomePage />
                </PrivateRoute>
              }
            />

            <Route
              path={routes.DRINKSPAGE}
              element={
                <PrivateRoute>
                  <Drinks />
                </PrivateRoute>
              }
            />
            <Route
              path={routes.ADD}
              element={
                <PrivateRoute>
                  <AddDrink />
                </PrivateRoute>
              }
            />
            <Route
              path={routes.FAVORITES}
              element={
                <PrivateRoute>
                  <Favorites />
                </PrivateRoute>
              }
            />
            <Route
              path={routes.MYDRINKS}
              element={
                <PrivateRoute>
                  <MyDrinks />
                </PrivateRoute>
              }
            />
            <Route
              path={routes.DRINKSPAGEWITHID}
              element={
                <PrivateRoute>
                  <DrinkWithID />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route
            path={routes.SIGNUP}
            element={
              <PublicRoute>
                <Welcome />
              </PublicRoute>
            }
          />
          <Route
            path={routes.SIGNIN}
            element={
              <PublicRoute>
                <Welcome />
              </PublicRoute>
            }
          />
          <Route
            path={routes.WELCOME}
            element={
              <PublicRoute>
                <Welcome />
              </PublicRoute>
            }
          />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
