import React from "react";

const ClothingMain = () => {
    return (


        <div className="clothing_main">

            <section class="slider">
                <h1>HOT SELLING</h1>
                <button class="pre-btn">&larrtl;</button>
                <button class="nxt-btn">&rarrtl;</button>
                <div id="hotSelling_product" class="hotSelling_product">
                </div>
            </section>


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
        </div>
    );
};

export default ClothingMain;
