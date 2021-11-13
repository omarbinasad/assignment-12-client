import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import "./DashBoard.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import { Button } from "react-bootstrap";
import DashBoardHOme from "./DashBoardHome/DashBoardHOme";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import AddProduct from "./AddProduct/AddProduct";
import ManageProduct from "./ManageProduct/ManageProduct";
import Orders from "../Orders/Orders";
import AddReview from "./AddReview/AddReview";
import useAuth from "../../../hooks/useAuth";
import Payment from "./Payment/Payment";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import UserRoute from "../../Login/UserRoute/UserRoute";
import ManageAllOrders from "./ManageAllOrders/ManageAllOrders";

const drawerWidth = 250;

function Dashboard(props) {
  const { user, logout } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let { path, url } = useRouteMatch();

  const { admin } = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="drawer-container h-100 pt-5">
      <Toolbar />

      <div className="ps-4">
        <li className="mt-4">
          <Link className="me-2 text-decoration-none fs-5 text-white" to="/">
            Home{" "}
          </Link>
        </li>
        {admin && (
          <Box>
            <li className="mt-4">
              <Link
                className="me-2 text-decoration-none fs-5 text-white"
                to={`${url}/makeAdmin`}
              >
                Make Admin{" "}
              </Link>
            </li>

            <li className="mt-4">
              <Link
                className="me-2 text-decoration-none fs-5 text-white"
                to={`${url}/addproduct`}
              >
                Add Product{" "}
              </Link>
            </li>
            <li className="mt-4">
              {" "}
              <Link
                className="me-2 text-decoration-none fs-5 text-white"
                to={`${url}/allorders`}
              >
                Manage all Orders{" "}
              </Link>
            </li>
            <li className="mt-4">
              <Link
                className="me-2 text-decoration-none fs-5 text-white"
                to={`${url}/manageproducts`}
              >
                Manage Product{" "}
              </Link>
            </li>
          </Box>
        )}

        {!admin && (
          <Box>
            {" "}
            <li className="mt-4">
              {" "}
              <Link
                className="me-2 text-decoration-none fs-5 text-white"
                to={`${url}/myorders`}
              >
                My Orders{" "}
              </Link>
            </li>
            <li className="mt-4">
              <Link
                className="me-2 text-decoration-none fs-5 text-white"
                to={`${url}/addreview`}
              >
                Add Review{" "}
              </Link>
            </li>
            <li className="mt-4">
              <Link
                className="me-2 text-decoration-none fs-5 text-white"
                to={`${url}/payment`}
              >
                Payment{" "}
              </Link>
            </li>
          </Box>
        )}
        <li className="mt-4">
          <Link
            onClick={logout}
            className="me-2 text-decoration-none fs-5 text-white"
            to={`${url}`}
          >
            Logout{" "}
          </Link>
        </li>
      </div>

      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            {/* <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon> */}
            {/* <ListItemText primary={text} /> */}
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      className="dashboard-container"
      sx={{ display: "flex", alignItems: "center" }}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar className="py-4">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            FlyingX Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <DashBoardHOme></DashBoardHOme>
          </Route>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          {/* <Route path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </Route> */}
          <AdminRoute path={`${path}/addproduct`}>
            <AddProduct></AddProduct>
          </AdminRoute>
          <AdminRoute path={`${path}/manageproducts`}>
            <ManageProduct></ManageProduct>
          </AdminRoute>
          <UserRoute path={`${path}/myorders`}>
            <Orders></Orders>
          </UserRoute>
          <AdminRoute path={`${path}/allorders`}>
            <ManageAllOrders></ManageAllOrders>
          </AdminRoute>
          <UserRoute path={`${path}/addreview`}>
            <AddReview></AddReview>
          </UserRoute>
          <UserRoute path={`${path}/payment`}>
            <Payment></Payment>
          </UserRoute>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
