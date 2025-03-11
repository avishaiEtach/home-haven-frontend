import { AboutUs } from "./pages/AboutUs/AboutUs";
import { ContactUs } from "./pages/ContactUs/ContactUs";
import { HomePage } from "./pages/HomePage/HomePage";
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
];

export function replaceRouteParam(
  routePattern: string,
  replacement: string
): string {
  // Use a regular expression to replace the :id placeholder with the provided string
  const replacedRoute = routePattern.replace(/:id/g, replacement);
  return replacedRoute;
}
