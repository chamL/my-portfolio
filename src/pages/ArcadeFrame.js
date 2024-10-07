
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// JSX FILES 
import ArcadeFrameHeader from '../components/arcadeComponents/ArcadeFrameHeader';
import ArcadeFrameBody from '../components/arcadeComponents/ArcadeFrameBody.jsx';
import ArcadeCanvas from '../components/arcadeComponents/ArcadeCanvas.jsx';
import Snake from '../components/arcadeComponents/gameLogic/Snake';




import '../components/arcadeComponents/ArcadeFrameBody'
import '../components/arcadeComponents/ArcadeFrameHeader'



// CSS FILES 
import '../components/arcadeComponents/arcadeFrameHeader.css'
import '../components/arcadeComponents/arcadeFrameBody.css'
import '../components/arcadeComponents/arcadeCanvas.css'




function ArcadeFrame() {
    return (
        <div>
            <ArcadeFrameHeader />
            <ArcadeFrameBody />


        </div>
    );
}

export default ArcadeFrame;