import React, { useContext } from 'react';
import AppContext from 'utils/appContext';
import './styles.css';

function CallPage({ history }) {
    const myContext = useContext(AppContext);
    const startWebcam = async() =>{
        const newStream = await navigator.mediaDevices
            .getUserMedia({ video: true, audio: true});
    
        myContext.setLocalStream(newStream);
    }

    return (
        <div className="body-wrapper">
            <div className="video2">
                <div id="myVideo">    
                    <video id="sVideo" autoPlay playsInline></video>
                </div>
                <div>
                    <div className="lButton"><button>b1</button></div>
                    <div className="lButton"><button>b2</button></div>
                </div>
                <div id="yourVideo">
                    <video id="lVideo" autoPlay playsInline></video>
                </div>
            </div>
            <div>
                    <button onClick={ () => history.push('/thanks')}> end call </button>
            </div>
        </div>
    );
}

export default CallPage;
