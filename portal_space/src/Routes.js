import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from 'pages/constants/Header';
import startPage from 'pages/01_startPage';
import callPage from 'pages/02_callPage';
import endPage from 'pages/03_endPage';
import Footer from 'pages/constants/Footer';
import errorPage from 'pages/04_errorPage';
class Routes extends React.Component{
    render(){
        return(
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/" component={startPage}/>
                    <Route exact path="/call" component={callPage}/>
                    <Route exact path="/thanks" component={endPage}/>
                    <Route component={errorPage}/>
                </Switch>
                <Footer/>
            </Router>
        );
    }
}

export default Routes;