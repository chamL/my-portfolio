
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// JSX FILES 
import ArcadeFrameHeader from '../components/arcadeComponents/ArcadeFrameHeader';
import ArcadeFrameBody from '../components/arcadeComponents/ArcadeFrameBody.jsx';
import Arcade from '../components/arcadeComponents/Arcade';




import '../components/arcadeComponents/ArcadeFrameBody'
import '../components/arcadeComponents/ArcadeFrameHeader'


function ArcadeFrame() {
    return (
        <div>
            <ArcadeFrameHeader />
            <ArcadeFrameBody />

        </div>
    );
}

export default ArcadeFrame;