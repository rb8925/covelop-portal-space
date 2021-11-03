import React, { useState }from 'react';
import AppContext from 'utils/appContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from 'app/pages/constants/Header';
import StartPage from 'app/pages/01_startPage';
import CallPage from 'app/pages/02_callPage';
import EndPage from 'app/pages/03_endPage';
import Footer from 'app/pages/constants/Footer';
import ErrorPage from 'app/pages/04_errorPage';
import serverSetting from 'utils/serverSetting';

export function App(){
    const pc = new RTCPeerConnection(serverSetting);
    const [localStream,setLocalStream] = useState(null);
    const [remoteStream,setRemoteStream] = useState(null);

    const userSetting = {
        pc,
        localStream,
        remoteStream,
        setLocalStream,
        setRemoteStream
    };

    return(
        <AppContext.Provider value={userSetting}>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/" component={StartPage}/>
                    <Route exact path="/call" component={CallPage}/>
                    <Route exact path="/thanks" component={EndPage}/>
                    <Route component={ErrorPage}/>
                </Switch>
                <Footer/>
            </Router>
        </AppContext.Provider>
    );
}
