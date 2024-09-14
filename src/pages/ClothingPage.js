
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// JSX FILES 
import ClothingHeader from '../components/clothingComponents/ClothingHeader';
import ClothingPopup from '../components/clothingComponents/ClothingPopup';
import ClothingMain from '../components/clothingComponents/ClothingMain';
import ClothingFooter from '../components/clothingComponents/ClothingFooter';








// CSS FILES 
import '../components/clothingComponents/clothingHeader.css'
import '../components/clothingComponents/clothingPopup.css'
import '../components/clothingComponents/clothingMain.css'
import '../components/clothingComponents/clothingFooter.css'




function ClothingPage() {
    return (
        <div>
            <ClothingHeader />
            <ClothingPopup />
            <ClothingMain />
            <ClothingFooter />
        </div>
    );
}

export default ClothingPage;