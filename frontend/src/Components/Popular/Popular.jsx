import React, { useState, useEffect } from "react";
import './Popular.css'
import Item from "../Item/Item";

const Popular = () => {

    const [popularProducts, setPopularProducts] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:4000/popularinwomen')
        .then((response) => response.json()) // Corrected this line
        .then((data) => setPopularProducts(data))
        .catch((error) => console.error('Error fetching popular products:', error)); // Added error handling
    }, []);

    return (
        <div className="popular">
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">
                {popularProducts.map((item) => {
                    return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    )
}

export default Popular;
