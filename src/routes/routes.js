// routes.js
import { Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Patient from "../pages/Patient/Patient";
import Doctor from "../pages/Doctors/Doctor";
import Diet from "../pages/Diet/Diet";
import Brain from "../pages/Brain/Brain";
import BlogCategories from "../pages/BlogCategories/BlogCategories";
import BlogContent from "../pages/BlogContent/BlogContent";
import FAQ from "../pages/FAQ/FAQ";
import Reports from "../pages/Reports/Reports";
import DietCategories from "../pages/DietCategories/DietCategories";
import GutCategories from "../pages/GutCategories/GutCategories";
// import Vendors from "../pages/Vendors/Vendors";
// import Admins from "../pages/Admins/Admins";
// import Events from "../pages/Events/Events";
// import Subscriptions from "../pages/Subscriptions/Subscriptions";
// import Payments from "../pages/Payments/Payments";
// import VenueFeatures from "../pages/VenueFeatures/VenueFeatures";
// import Amenities from "../pages/Amenities/Amenities";
// import Banners from "../pages/Banners/Banners";
// import Venues from "../pages/Venues/Venues";
// import TokenPoints from "../pages/Tokens/TokenPoints";
// import OfflineAddon from "../pages/OfflineAddon/OfflineAddon";
// import Addons from "../pages/Addon/Addons";
// import Actionables from "../pages/Actionables/Actionables";

function PrivateRoute({ children }) {
  const auth = localStorage.getItem("token");
  return auth ? children : <Navigate to="/login" />;
}

function PublicRoute({ children }) {
  const auth = localStorage.getItem("token");
  return !auth ? children : <Navigate to="/" />;
}

const routes = [
  {
    path: "/",
    component: (
      <PrivateRoute>
        <Patient />
      </PrivateRoute>
    ),
    isPrivate: false,
  },
  {
    path: "/login",
    component: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
    isPrivate: false,
  },
  //   {
  //     path: "/register",
  //     component: (
  //       <PublicRoute>
  //         <Register />
  //       </PublicRoute>
  //     ),
  //     isPrivate: false,
  //   },
  {
    path: "/Patient",
    component: (
      <PrivateRoute>
        <Patient />
      </PrivateRoute>
    ),
    isPrivate: false,
  },
  {
    path: "/doctor",
    component: (
      <PrivateRoute>
        <Doctor />
      </PrivateRoute>
    ),
    isPrivate: false,
  },
  {
    path: "/diet",
    component: (
      <PrivateRoute>
        <Diet />
      </PrivateRoute>
    ),
    isPrivate: false,
  },
  {
    path: "/brain",
    component: (
      <PrivateRoute>
        <Brain />
      </PrivateRoute>
    ),
    isPrivate: false,
  },
  {
    path: "/blogContnent",
    component: (
      <PrivateRoute>
        <BlogContent />
      </PrivateRoute>
    ),
    isPrivate: false,
  },
  {
    path: "/faq",
    component: (
      <PrivateRoute>
        <FAQ />
      </PrivateRoute>
    ),
    isPrivate: false,
  },
  {
    path: "/reports",
    component: (
      <PrivateRoute>
        <Reports />
      </PrivateRoute>
    ),
    isPrivate: false,
  },
  {
    path: "/blogcategories",
    component: (
      <PrivateRoute>
        <BlogCategories />
      </PrivateRoute>
    ),
    isPrivate: false,
  },
  {
    path: "/dietcategories",
    component: (
      <PrivateRoute>
        <DietCategories />
      </PrivateRoute>
    ),
    isPrivate: false,
  },
  {
    path: "/gutcategories",
    component: (
      <PrivateRoute>
        <GutCategories />
      </PrivateRoute>
    ),
    isPrivate: false,
  },
  //   {
  //     path: "/vendors",
  //     component: (
  //       <PrivateRoute>
  //         <Vendors />
  //       </PrivateRoute>
  //     ),
  //     isPrivate: false,
  //   },
  //   {
  //     path: "/admins",
  //     component: (
  //       <PrivateRoute>
  //         <Admins />
  //       </PrivateRoute>
  //     ),
  //     isPrivate: false,
  //   },
  //   {
  //     path: "/events",
  //     component: (
  //       <PrivateRoute>
  //         <Events />
  //       </PrivateRoute>
  //     ),
  //     isPrivate: false,
  //   },
  //   {
  //     path: "/venues",
  //     component: (
  //       <PrivateRoute>
  //         <Venues />
  //       </PrivateRoute>
  //     ),
  //     isPrivate: false,
  //   },
  //   {
  //     path: "/subscriptions",
  //     component: (
  //       <PrivateRoute>
  //         <Subscriptions />
  //       </PrivateRoute>
  //     ),
  //     isPrivate: false,
  //   },
  //   {
  //     path: "/payments",
  //     component: (
  //       <PrivateRoute>
  //         <Payments />
  //       </PrivateRoute>
  //     ),
  //     isPrivate: false,
  //   },
  //   {
  //     path: "/token-points",
  //     component: (
  //       <PrivateRoute>
  //         <TokenPoints />
  //       </PrivateRoute>
  //     ),
  //     isPrivate: false,
  //   },

  //   {
  //     path: "/venue-features",
  //     component: (
  //       <PrivateRoute>
  //         <VenueFeatures />
  //       </PrivateRoute>
  //     ),
  //     isPrivate: false,
  //   },
  //   {
  //     path: "/amenities",
  //     component: (
  //       <PrivateRoute>
  //         <Amenities />
  //       </PrivateRoute>
  //     ),
  //     isPrivate: false,
  //   },
  //   {
  //     path: "/banners",
  //     component: (
  //       <PrivateRoute>
  //         <Banners />
  //       </PrivateRoute>
  //     ),
  //     isPrivate: false,
  //   },
  //   {
  //     path: "/addons",
  //     component: (
  //       <PrivateRoute>
  //         <Addons />
  //       </PrivateRoute>
  //     ),
  //     isPrivate: false,
  //   },
  //   {
  //     path: "/offline-addon",
  //     component: (
  //       <PrivateRoute>
  //         <OfflineAddon />
  //       </PrivateRoute>
  //     ),
  //     isPrivate: false,
  //   },
  //   {
  //     path: "/admin-actionables",
  //     component: (
  //       <PrivateRoute>
  //         <Actionables />
  //       </PrivateRoute>
  //     ),
  //     isPrivate: false,
  //   },
];

export default routes;
