import React from "react";
import Home from "./Home";
import Features from "./Features";
import FeaturesDetails from "./FeaturesDetails";
import ContactUs from "./ContactUs";
import Login from "./Login";
import NotFound from "./NotFound"
import Header from "./Navbar";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function RoutesConfig() {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/ContactUs" component={ContactUs} />
                    <Route exact path="/product" component={Features} />
                    <Route path="/product/:id" component={FeaturesDetails} />
                    <Route path="/Login" component={Login} />
                    <Route path="*" component={NotFound} />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default RoutesConfig;