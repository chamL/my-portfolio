import React, { useRef } from 'react';


// IMPORT COMPONMENTS 
import ArcadeScoreList from './ArcadeScoreList';
import ArcadeCanvas from './ArcadeCanvas';

// IMPORT CSS
import '../arcadeComponents/arcadeScoreList.css'
import '../arcadeComponents/arcadeCanvas.css'

function ArcadeFrameBody(

) {


    return (

        <main>
            <ArcadeCanvas />
            <ArcadeScoreList />

        </main>
    );
}

export default ArcadeFrameBody;
