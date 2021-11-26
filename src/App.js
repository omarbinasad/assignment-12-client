// import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/Login/Login";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Contact from "./components/Contact/Contact";
import AllProducts from "./components/AllProducts/AllProducts";
import Purchase from "./components/Purchase/Purchase";
import DashBoard from "./components/DashBoard/DashBoard/DashBoard";
import Register from "./components/Login/Register/Register";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          {/* <Header></Header> */}
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/allproducts">
              <AllProducts></AllProducts>
            </Route>
            {/* <Route path="/addreview">
              <AddReview></AddReview>
            </Route> */}
            <PrivateRoute path="/product/:productId">
              <Purchase></Purchase>
            </PrivateRoute>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>

            <PrivateRoute path="/dashboard">
              <DashBoard></DashBoard>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          {/* <Footer></Footer> */}
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
