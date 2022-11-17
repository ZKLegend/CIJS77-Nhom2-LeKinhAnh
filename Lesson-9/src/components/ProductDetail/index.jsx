import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const params = useParams();
    console.log("Params:", params);
    return (
        <div className='product-detail'>
            <h3>Product: {params.productId}</h3>
        </div>
    )
}

export default ProductDetail;