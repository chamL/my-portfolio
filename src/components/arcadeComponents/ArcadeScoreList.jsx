
import React, { useRef } from 'react';




function ArcadeScoreList() {

    const scoreListRef = useRef(null);
    return (

        <div className="leaderboard">
            <p className='scoreList_header'>Score List </p>
            <div className="scroll_container">
                <ol id="score_list" ref={scoreListRef}>
                    <span>${ }</span>
                    <span>dgetdgregre</span>
                    <span>dgetdgregre</span>
                    <span>dgetdgregre</span>
                    <span>dgetdgregre</span>
                    <span>dgetdgregre</span>
                    <span>dgetdgregre</span>
                    <span>dgetdgregre</span>
                    <span>dgetdgregre</span>
                </ol>
            </div>
        </div>
    );
}
export default ArcadeScoreList;