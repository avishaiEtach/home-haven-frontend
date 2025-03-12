import { AboutUs } from "./pages/AboutUs/AboutUs";
import { ContactUs } from "./pages/ContactUs/ContactUs";
import { HomePage } from "./pages/HomePage/HomePage";
import { Page404 } from "./pages/Page404/Page404";
import { Page500 } from "./pages/Page500/Page500";
import { ProductComparison } from "./pages/ProductComparison/ProductComparison";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { Shop } from "./pages/Shop/Shop";

export const routesPath = {
  home: "/",
  aboutUs: "/about-us",
  shop: "/shop",
  contactUs: "/contact-us",
  productPage: "/shop/product-page/:id",
  productComparison: "/product-comparison",
  page500: "/page-500",
  page404: "/page-404",
};

export const routes: Routes[] = [
  {
    path: routesPath.home,
    component: HomePage,
    label: "Home",
  },
  {
    path: routesPath.shop,
    component: Shop,
    label: "Shop",
  },
  {
    path: routesPath.aboutUs,
    component: AboutUs,
    label: "About",
  },
  {
    path: routesPath.contactUs,
    component: ContactUs,
    label: "Contact",
  },
];

export const extraRoutes: Routes[] = [
  {
    path: routesPath.productPage,
    component: ProductPage,
  },
  {
    path: routesPath.productComparison,
    component: ProductComparison,
  },
  {
    path: routesPath.page500,
    component: Page500,
  },
  {
    path: routesPath.page404,
    component: Page404,
  },
];

export function replaceRouteParam(
  routePattern: string,
  replacement: string
): string {
  // Use a regular expression to replace the :id placeholder with the provided string
  const replacedRoute = routePattern.replace(/:id/g, replacement);
  return replacedRoute;
}
