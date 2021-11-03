import React from 'react';
import './styles.css';

function ErrorPage( {history} ) {
    return (
        <div className="body-wrapper">
            <div className="inner-wrapper">
                <h1>
                    경로 잘못 입력했을때 나오는 에러 페이지
                </h1>
                <p>
                    go back to main
                </p>
                <br/>
                <button onClick={ () => history.push('/')}> 메인으로 가기 </button>
            </div>
        </div>
    );
}

export default ErrorPage;
