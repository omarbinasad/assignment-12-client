import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import ServiceDetails from "./components/ServiceDetails/ServiceDetails";
import Login from "./components/Login/Login";
import Header from "./components/Shared/Header/Header";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Footer from "./components/Shared/Footer/Footer";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import AddService from "./components/AddService/AddService";
import ManageSercices from "./components/ManageServices/ManageServices";
import MyOrders from "./components/MyOrders/MyOrders";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/service/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/addservice">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/manageservices">
              <ManageSercices></ManageSercices>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
