import React, { PureComponent, useContext } from 'react';
import AppContext from 'utils/appContext';

import './styles.css';

function StartPage({ history }) {
    const myContext = useContext(AppContext);
    const startWebcam = async() =>{
        const newStream = await navigator.mediaDevices
            .getUserMedia({ video: true, audio: true});
    
        myContext.setLocalStream(newStream);
    }

    return (
        <div className="body-wrapper">
            <div className="inner-wrapper">
                {/* <p>
                    start your portal space
                </p> */}
                <div className= "videos">
                    <div className="video1">
                        <h3>my video</h3>
                        <video id="webcamVideo" autoPlay playsInline></video>
                        
                        <div>
                            <span><button >
                                Audio
                            </button></span>
                            <span><button id="webcamButton"
                                onClick={() => startWebcam()}>
                                Video
                            </button></span>
                        </div>
                    </div>
                    <div>
                        <input type="text" />
                        <button id="callButton">COPY</button>
                        <input id="callInput" />
                        <button id="answerButton">CALL</button> 
                    </div>
                    <div>
                        <button onClick={ () => history.push('/call')}>phone.</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StartPage;
