import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import ShowProduct from "./ShowProduct";

const Product = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);

            setProduct(await response.json());
            setLoading(false);

        }

        getProduct();
    }, []);

    return (
        <>
            <div className="container">

            </div>
            <div className="row">
                {loading ?
                    <Loading />
                    :
                    <ShowProduct/>
                }
            </div>
        </>
    )
};

export default Product;