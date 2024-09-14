import React from "react";

const ClothingMain = () => {
    return (
        <main>
            <div className="category">
                <ul>
                    <li><a href="#">TEES</a></li>
                    <li><a href="#">HOODIES</a></li>
                    <li><a href="#">HEADWEAR</a></li>
                    <li><a href="#">PANTS</a></li>
                </ul>
            </div>
            <hr />
            <div className="product_container" id="product_container">
                {/* Products will be added here */}
            </div>
        </main>
    );
};

export default ClothingMain;
