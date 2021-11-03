import React from 'react';

function endPage( { history }) {
    return (
        <div>
            <h1>
                영상통화 끝나면 나오는 페이지
            </h1>
            <p>
                고우 투 메인 버튼 추가 필요
            </p>
            <button onClick={ () => history.push('/')}> 메인으로 가기 </button>
        </div>
    );
}

export default endPage;
