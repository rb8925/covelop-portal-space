import React, { useContext } from 'react';
import AppContext from 'utils/appContext';
import './styles.css';

function EndPage( { history }) {
    return (
        <div className="body-wrapper">
            <div className="inner-wrapper">
                <div className="endCall">
                    <h1>
                        통화가 종료되었습니다.
                    </h1>
                </div>
                <div>
                    <button onClick={ () => history.push('/')}> 메인으로 가기 </button>
                </div>
            </div>
        </div>
    );
}

export default EndPage;
