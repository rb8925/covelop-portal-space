import React, { PureComponent, useContext } from 'react';
import AppContext from 'utils/appContext';

import './styles.css';

function StartPage() {
    const myContext = useContext(AppContext);
    const startWebcam = async() =>{
        const newStream = await navigator.mediaDevices
            .getUserMedia({ video: true, audio: true});
    
        myContext.setLocalStream(newStream);
    }

    return (
        <div className="body-wrapper">
            <div className="inner-wrapper">
                <h1>
                제일 처음 접속하면 보이는 페이지
                </h1>
                <p>
                    포털 스페이스를 시작하세요
                </p>
                <div className= "videos">
                    <span>
                        <h3>나의 비디오</h3>
                        <video id="webcamVideo" autoPlay playsInline></video>
                    </span>
                </div>
                <button id="webcamButton"
                        onClick={() => startWebcam()}>
                    Start webcam
                </button>
                <h2>2. Create a new Call</h2>
                <button id="callButton" disabled>Create Call (offer)</button>
                <h2>3. Join a Call</h2>
                <p>Answer the call from a different browser window or device</p>
                
                <input id="callInput" />
                <button id="answerButton" disabled>Answer</button>
            </div>
        </div>
    );
}

export default StartPage;
