import React from 'react';


function Home() {
    return(
        <div>
            <div className="add-to-cart">
                <img src="https://cdn.pixabay.com/photo/2014/03/24/13/50/shopping-cart-294547_640.png" alt="cart-image" />
            </div>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://images.macrumors.com/t/4t6YczQYYRYI6nuemXW-ZkXH_TI=/400x0/filters:quality(90)/article-new/2017/09/iphonexdesign-800x669.jpg?lossy" alt="iphone-image"/>
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Home;