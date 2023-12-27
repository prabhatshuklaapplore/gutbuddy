import React from "react";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import SummarizeIcon from "@mui/icons-material/Summarize";
// import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
// import EventIcon from "@mui/icons-material/Event";
// import StadiumIcon from "@mui/icons-material/Stadium";
// import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
// import PaymentIcon from "@mui/icons-material/Payment";
// import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
// import AddBoxIcon from "@mui/icons-material/AddBox";
// import CategoryIcon from "@mui/icons-material/Category";
// import StorefrontIcon from "@mui/icons-material/Storefront";
// import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.css";
// import logo1 from "../../assets/images/buddy_logo.png";
import logo1 from "../../assets/images/logo1.png";
import CategoryIcon from "@mui/icons-material/Category";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import PsychologyIcon from "@mui/icons-material/Psychology";
import RssFeedIcon from "@mui/icons-material/RssFeed";

export const sidebarListArr = [
  { label: "Home", icon: HomeIcon, url: "/" },
  // { label: "Vendors", icon: StorefrontIcon, url: "/vendors" },
  { label: "Patient", icon: GroupIcon, url: "/Patient" },
  { label: "Doctor", icon: GroupIcon, url: "/doctor" },
  {
    label: "Diet Categories",
    icon: CategoryIcon,
    url: "/dietcategories",
  },
  {
    label: "Gut Categories",
    icon: CategoryIcon,
    url: "/gutcategories",
  },
  {
    label: "Blog Categories",
    icon: CategoryIcon,
    url: "/blogcategories",
  },
  // {
  //   label: "Sub Categories",
  //   icon: BrandingWatermarkIcon,
  //   url: "/Subcategories",
  // },
  { label: "Diet", icon: DinnerDiningIcon, url: "/diet" },
  { label: "Brain", icon: PsychologyIcon, url: "/brain" },
  {
    label: "Blog Content",
    icon: RssFeedIcon,
    url: "/blogContnent",
  },
  {
    label: "FAQ",
    icon: LiveHelpIcon,
    url: "/faq",
  },
  {
    label: "Reports",
    icon: SummarizeIcon,
    url: "/reports",
  },

  // { label: "Admins", icon: AdminPanelSettingsIcon, url: "/admins" },
  // { label: "Events", icon: EventIcon, url: "/events" },
  // { label: "Venues", icon: StadiumIcon, url: "/venues" },
  // { label: "Subscriptions", icon: SubscriptionsIcon, url: "/subscriptions" },
  // { label: "Payments", icon: PaymentIcon, url: "/payments" },
  // { label: "Token Points", icon: PaymentIcon, url: "/token-points" },
  // // { label: "Venue Features", icon: AddBoxIcon, url: "/venue-features" },
  // { label: "Amenities", icon: CategoryIcon, url: "/amenities" },
  // { label: "Banners", icon: ViewCarouselIcon, url: "/banners" },
  // { label: "Actionables", icon: ViewCarouselIcon, url: "/admin-actionables" },
  // { label: "App Add On ", icon: AddBoxIcon, url: "/addons" },
  // { label: "Admin Add On", icon: AddBoxIcon, url: "/offline-addon" },
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location", location.pathname);
  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <>
      <Box className={styles.main_div}>
        <Box className={styles.header_div}>
          <img src={logo1} alt="logo" className={styles.logo} />
          {/* <Typography className={styles.header_name}>HAPP NOW</Typography> */}
        </Box>
        <Typography className={styles.logo_heading}>GUT BUDDY</Typography>

        <List className={styles.list_div}>
          {sidebarListArr.map((val, index) => (
            <div
              key={index}
              className={
                location.pathname === val?.url
                  ? styles.active_icon
                  : styles.inactive_icon
              }
            >
              <NavLink
                to={`${val.url}`}
                style={{ textDecoration: "none", color: "darkgray" }}
              >
                <ListItem
                  button
                  key={val.label}
                  // sx={location.pathname === val.url ? "lightgreen" : "white"}
                >
                  <ListItemIcon color="inherit" className={styles.icon_css}>
                    {val.icon && <val.icon />}
                  </ListItemIcon>
                  <ListItemText
                    primary={val.label}
                    className={
                      location.pathname === val?.url
                        ? styles.active_url_text
                        : styles.inactive_url_text
                    }
                  />
                </ListItem>
              </NavLink>
            </div>
          ))}
        </List>
        <Box className={styles.logout_div}>
          <Button
            onClick={logoutHandler}
            variant="contained"
            className={styles.logout_btn}
          >
            logout
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
