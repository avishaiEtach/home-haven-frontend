import { AppHeader } from "./components/AppHeader/AppHeader";
import { Backdrop, Fab, Zoom } from "@mui/material";
import { useEffect, useMemo } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useBackdrop } from "./context/Backdrop/BackdropContext";
import { Cart } from "./components/Cart/Cart";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { setCart, setCompare, setFavorite } from "./store/userActions.actions";
import { useSocketContext } from "./context/Socket/SocketContext";
import { BackdropNavbar } from "./components/BackdropNavbar/BackdropNavbar";
import { AppFooter } from "./components/AppFooter/AppFooter";
import { extraRoutes, routes, routesPath } from "./routes";
import { RootState } from "./store/store";
import Aos from "aos";
import "aos/dist/aos.css";
import { Page404 } from "./pages/Page404/Page404";

export function App() {
  const { isBackdropOpen, closeBackdrop, backdropState } = useBackdrop();
  const { compare, favorite, cart } = useSelector(
    (state: RootState) => state.userActionModel
  );
  const { socket } = useSocketContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    if (!socket) return;
    const token = Cookies.get(process.env.REACT_APP_TOKEN_NAME ?? "");
    socket.emit("verify-token", token);
    socket.on("new-token", (token: string) => {
      Cookies.set(process.env.REACT_APP_TOKEN_NAME ?? "", token, {
        expires: 7,
      });
    });

    socket.on("get-token-info", (tokenInfo: TokenInfo) => {
      if (tokenInfo) {
        dispatch(setCart(tokenInfo.cart));
        dispatch(setFavorite(tokenInfo.favorite));
        dispatch(setCompare(tokenInfo.compare));
      }
    });

    return () => {
      socket.off("new-token");
      socket.off("get-token-info");
    };
  }, [socket]);

  const memoizedCompare = useMemo(() => [...compare], [compare]);

  useEffect(() => {
    if (!socket) return;
    const token = Cookies.get(process.env.REACT_APP_TOKEN_NAME ?? "");
    socket.emit("change-token", token, cart, favorite, memoizedCompare);
  }, [socket, favorite, cart, memoizedCompare]);

  const memoizedRoutes = useMemo(
    () => [...routes, ...extraRoutes],
    [routes, extraRoutes]
  );

  return (
    <>
      <AppHeader />
      <main>
        <Routes>
          {memoizedRoutes.map((route) => (
            <Route
              key={route.path}
              Component={route.component}
              path={route.path}
            />
          ))}
          <Route path="*" Component={Page404} />
        </Routes>
        <Zoom in={compare.length > 0} unmountOnExit>
          <Fab
            className="items-to-compare-floating-button"
            color="primary"
            aria-label="add"
            variant="extended"
            onClick={() => navigate(routesPath.productComparison)}
          >
            {compare.length} items to compare
          </Fab>
        </Zoom>
      </main>
      <AppFooter />
      <Backdrop
        sx={(theme) => ({
          color: "#fff",
          zIndex: theme.zIndex.drawer + 1,
          justifyContent: "start",
        })}
        open={isBackdropOpen}
        onClick={closeBackdrop}
      >
        {backdropState === "cart" ? <Cart /> : <BackdropNavbar />}
      </Backdrop>
    </>
  );
}
